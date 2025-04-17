import styled from "styled-components";

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const NameInputContainer = styled.div`
display: flex;
gap: 10px;
margin-top:10px;
`;

export const ButtonContainer = styled.div`
display: flex;
gap: 10px;
`;

export const InputField = styled.input`
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgb(255, 255, 255);
  &:focus {
    border-color:rgb(148, 0, 211);
    outline: none;
  }
`;

export const SaveButton = styled.button`
  width: 80px;
  padding: 10px;
  color: rgb(148, 0, 211);
  background-color:rgb(255, 255, 255);
  border: 1px solid rgb(148, 0, 211);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CancelButton = styled.button`
  width: 80px;
  padding: 10px;
  color: rgb(148, 0, 211);
  background-color:rgb(255, 255, 255);
  border: 1px solid rgb(148, 0, 211);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background-color:rgb(255, 255, 255);
  color: rgb(148, 0, 211);
  border: 1px solid rgb(148,0,211);
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NameText = styled.span`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;
