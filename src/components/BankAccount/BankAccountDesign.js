import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  width: 85%;
  margin: 0 auto;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2.5rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Balance = styled.p`
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  @media (min-width: 720px) {
    font-size: 2.7rem;
  }
`;

export const Description = styled.p`
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  @media (min-width: 720px) {
    flex: 0;
  }
`;

export const ActionButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.2rem;
  border-radius:10px;
  border-color: rgb(138, 43, 226);
  background-color: rgb(138, 43, 226);
  color: #fff;
  @media (min-width: 720px) {
    width: 220px;
  }
`;
