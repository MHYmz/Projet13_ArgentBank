import styled from "styled-components";


export const UserMainProfile = styled.main`
  background-color: #e0e6ed;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const UserProfileTitle = styled.div`
  .user-name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`;
