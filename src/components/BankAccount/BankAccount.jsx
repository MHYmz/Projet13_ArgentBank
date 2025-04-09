import React from "react";
import { Container,Content, Title, Balance, Description, ButtonWrapper, ActionButton, } from "./BankAccountDesign.js";

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
        <ActionButton>View transactions</ActionButton>
      </ButtonWrapper>
    </Container>
  );
};

export default BankAccount;
