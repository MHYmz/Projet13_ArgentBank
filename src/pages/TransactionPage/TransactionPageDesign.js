import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;

  h2 {
    margin: 0 0 0 1rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
  }
`;

export const BackButton = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color:rgb(148, 0, 211);
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color:rgb(0, 179, 116);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const Row = styled.tr`
  background: #fff;
  border-bottom: 1px solid #ddd;
  transition: background 0.3s;

  &:hover {
    background: #f7f7f7;
  }
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color:rgb(148, 0, 211);
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

export const DetailsRow = styled.tr`
  background: #f9f9f9;
`;

export const DetailsContainer = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-left: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 80%;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  margin-top: 0.25rem;
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const EditIcon = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: #007bff;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

