import React, { useState } from "react";

const NameEditor = ({ fullName, onSave, onCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(fullName);

  const handleSave = () => {
    onSave(newName);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSave}>
            Save
          </button>
          <button onClick={() => { setIsEditing(false); onCancel(); }}> Cancel </button>
        </>
      ) : (
        <>
          <span>{newName}</span>
          <button onClick={() => setIsEditing(true)} > Edit </button>
        </>
      )}
    </div>
  );
};

export default NameEditor;
