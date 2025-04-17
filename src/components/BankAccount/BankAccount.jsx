import React from "react";
import { Container,Content, Title, Balance, Description, ButtonWrapper, ActionButton, } from "./BankAccountDesign.js";
import { Link } from "react-router-dom";

const BankAccount = ({ name, number, balance, details }) => {

  
  return (
    <Container>
      <Content >
        <Title>
          {name} ({number})
        </Title>
        <Balance>{balance}</Balance>
        <Description>{details}</Description>
      </Content>
      <ButtonWrapper>
        <Link to={`/transactions/${number}`} state={{ accountName: name}}>
        <ActionButton >View transactions</ActionButton>
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default BankAccount;
