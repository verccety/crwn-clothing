import styled from 'styled-components/macro';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;


  @media screen and (max-width: 800px) {
    width: 280px;

    button {
      margin-bottom: 10px;
    }
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column
  }
`;
