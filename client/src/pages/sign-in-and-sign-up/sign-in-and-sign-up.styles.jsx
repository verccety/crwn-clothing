import styled from 'styled-components/macro';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;


  @media screen and (max-width: 800px) {
    width: 300px;
    flex-direction: column;

    button {
        min-width: unset;
      }
  }
`;
