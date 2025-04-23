import React, { useEffect, useState } from "react";
import {
  InputField,
  NameContainer,
  EditButton, 
  SaveButton,
  CancelButton,
  NameText,
  NameInputContainer,
  ButtonContainer,
} from "./NameEditorDesign.js"


const NameEditor = ({ firstName, lastName, onSave, onCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  useEffect(() => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
  }, [firstName, lastName]);


  const handleSave = () => {
    onSave(newFirstName,newLastName);
    setIsEditing(false);
  };

  return (
    <NameContainer>
      {isEditing ? (
        <>
        <NameInputContainer>
          <InputField
            type="text"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            placeholder="First Name"
          />
          <InputField
            type="text"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            placeholder="Last Name"
          />
          </NameInputContainer>
          
          <ButtonContainer>
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={() => { setIsEditing(false); onCancel(); }}>Cancel</CancelButton>
          </ButtonContainer>
        </>
      ) : (
        <>
          <NameText>{newFirstName} {newLastName}</NameText>
          <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
        </>
      )}
    </NameContainer>
  );
};

export default NameEditor;
