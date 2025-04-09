import styled from "styled-components";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
