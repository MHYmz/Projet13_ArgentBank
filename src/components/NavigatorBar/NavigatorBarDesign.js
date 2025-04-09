import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  @media (min-width: 520px) {
    padding: 15px 20px;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    color: #00bc77;
    transform: scale(1.03);
  }
`;

export const ItemNav = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserAction = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #333;
  &:hover {
    color: #00bc77;
  }
`;

export const BrandImage = styled.img`
  max-width: 100%;
  width: 120px;
  @media (min-width: 520px) {
    width: 180px;
  }
`;
