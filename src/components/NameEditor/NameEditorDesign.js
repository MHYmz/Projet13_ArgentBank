import styled from "styled-components";

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputField = styled.input`
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    border-color: #00bc77;
    outline: none;
  }
`;

export const SaveButton = styled.button`
  width: 80px;
  padding: 10px;
  color: white;
  background-color: #00bc77;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CancelButton = styled.button`
  width: 80px;
  padding: 10px;
  color: white;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #00bc77;
  color: white;
  border: none;
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
