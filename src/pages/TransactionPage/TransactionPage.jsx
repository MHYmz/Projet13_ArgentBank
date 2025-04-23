import React, { useState } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import {
  Container,
  Header,
  BackButton,
  Table,
  Row,
  DropdownButton,
  DetailsRow,
  DetailsContainer,
  Label,
  Input,
  Textarea,
  EditIcon,
  SaveButton,
  Toast,
} from "./TransactionPageDesign.js";

import transactionsData from "../../data/transactions";
import NavigatorBar from "../../components/NavigatorBar/NavigatorBar.jsx";

const TransactionPage = () => {
  // Hooks appelés systématiquement en début de fonction
  const { accountNumber } = useParams();
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [categories, setCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("categories")) || {};
});

const [notes, setNotes] = useState(() => {
  return JSON.parse(localStorage.getItem("notes")) || {};
});

const [editMode, setEditMode] = useState({});
const [toastMessage, setToastMessage] = useState ("");

  // Récupération du token (ce n'est pas un hook, donc peut venir après)
  const authToken = localStorage.getItem("jwtToken");
  // Si pas de token, redirection
  if (!authToken) {
    return <Navigate to="/connect" replace />;
  }

  const accountName = location.state?.accountName || "Account";
  const transactions = transactionsData[accountNumber] || [];
  const latestBalance = transactions.length > 0 ? transactions[transactions.length - 1 ].balance : 0;



  const toggleDetails = (idx) =>
    setExpandedIndex(expandedIndex === idx ? null : idx);

  const toggleEdit = (idx) => 
    setEditMode((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const handleCategoryChange = (idx, value) => {
    if (!editMode[idx]) return;
  setCategories((prev) => ({ ...prev, [idx]: value }));
  };

  const handleNoteChange = (idx, value) => {
    if (!editMode[idx]) return;
    setNotes((prev) => ({ ...prev, [idx]: value }));
  }

  const handleSave = (idx) => {
    localStorage.setItem("categories", JSON.stringify(categories || {} ));
    localStorage.setItem("notes", JSON.stringify(notes || {} ));
    setEditMode((prev) => ({ ...prev, [idx]: false }))
    setToastMessage("Modifications enregistrées avec succès");
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div>
      <NavigatorBar />
      {toastMessage && <Toast> {toastMessage}</Toast>}
    <Container>
      <Header>
        <BackButton to="/dashboard">← Back to Accounts</BackButton>
        <h2>
          Transactions for {accountName} ({accountNumber})
        </h2>
        <p>Last Balance: {latestBalance}</p>
        <p>Available Balance: {latestBalance}</p>
      </Header>

      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <React.Fragment key={idx}>
              <Row>
                <td>
                  <DropdownButton onClick={() => toggleDetails(idx)}>
                    {expandedIndex === idx ? "▲" : "▼"}
                  </DropdownButton>
                </td>
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td>{tx.amount}</td>
                <td>{tx.balance}</td>
              </Row>

              {expandedIndex === idx && (
                <DetailsRow>
                  <td colSpan="5">
                    <DetailsContainer>
                      <p>Transaction Type: {tx.type}</p>

                      <Label>
                        Category:
                        <Input
                          type="text"
                          value={categories[idx] ?? tx.category}
                          onChange={(e) =>
                            handleCategoryChange(idx, e.target.value)}
                            disabled={!editMode[idx]}
                        />
                        <EditIcon onClick={() => toggleEdit(idx)}>
                          {editMode[idx] ? "✓" :"✎" } 
                          </EditIcon>
                      </Label>

                      <Label>
                        Note:
                        <Textarea
                          value={notes[idx] ?? tx.note}
                          onChange={(e) =>
                            handleNoteChange(idx, e.target.value)}
                            disabled={!editMode[idx]}
                        />

                        <EditIcon onClick={() => toggleEdit(idx)}>
                          {editMode[idx] ? "✓" : "✎" } 
                          </EditIcon>
                      </Label>

                      {editMode[idx] && (
                        <SaveButton onClick={() => handleSave(idx)}>Save</SaveButton>
                      )}
                    </DetailsContainer>
                  </td>
                </DetailsRow>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default TransactionPage;
