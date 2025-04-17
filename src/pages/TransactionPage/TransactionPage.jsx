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
} from "./TransactionPageDesign.js";

import transactionsData from "../../data/transactions";

const TransactionPage = () => {

  // Hooks appelés systématiquement en début de fonction
  const { accountNumber } = useParams();
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [categories, setCategories] = useState({});
  const [notes, setNotes] = useState({});

  // Récupération du token (ce n'est pas un hook, donc peut venir après)
  const authToken = localStorage.getItem("jwtToken");

  // Si pas de token, redirection
  if (!authToken) {
    return <Navigate to="/connect" replace />;
  }

  const accountName = location.state?.accountName || "Account";
  const transactions = transactionsData[accountNumber] || [];

  const toggleDetails = (idx) =>
    setExpandedIndex(expandedIndex === idx ? null : idx);

  const handleCategoryChange = (idx, value) =>
    setCategories((prev) => ({ ...prev, [idx]: value }));

  const handleNoteChange = (idx, value) =>
    setNotes((prev) => ({ ...prev, [idx]: value }));

  return (
    <Container>
      <Header>
        <BackButton to="/dashboard">← Back to Accounts</BackButton>
        <h2>
          Transactions for {accountName} ({accountNumber})
        </h2>
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
                            handleCategoryChange(idx, e.target.value)
                          }
                        />
                        <EditIcon>✎</EditIcon>
                      </Label>

                      <Label>
                        Note:
                        <Textarea
                          value={notes[idx] ?? tx.note}
                          onChange={(e) =>
                            handleNoteChange(idx, e.target.value)
                          }
                        />
                        <EditIcon>✎</EditIcon>
                      </Label>
                    </DetailsContainer>
                  </td>
                </DetailsRow>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransactionPage;
