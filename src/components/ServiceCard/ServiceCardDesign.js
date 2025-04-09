import styled from "styled-components";

export const CardContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 65px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
  @media (min-width: 940px) {
    width: 100px;
  }
`;

export const CardTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
