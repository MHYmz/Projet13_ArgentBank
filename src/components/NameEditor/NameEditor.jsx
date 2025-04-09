import React, { useState } from "react";
import {
  InputField,
  NameContainer,
  EditButton, 
  SaveButton,
  CancelButton,
  NameText,
} from "./NameEditorDesign.js"


const NameEditor = ({ fullName, onSave, onCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(fullName);

  const handleSave = () => {
    onSave(newName);
    setIsEditing(false);
  };

  return (
    <NameContainer>
      {isEditing ? (
        <>
          <InputField
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <SaveButton onClick={handleSave}> Save </SaveButton>
          <CancelButton onClick={() => { setIsEditing(false); onCancel(); }}> Cancel </CancelButton>
        </>
      ) : (
        <>
          <NameText>{newName}</NameText>
          <EditButton onClick={() => setIsEditing(true)} > Edit </EditButton>
        </>
      )}
    </NameContainer>
  );
};

export default NameEditor;
