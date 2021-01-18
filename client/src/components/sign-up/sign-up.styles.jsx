import styled from 'styled-components/macro';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;


  @media screen and (max-width: 800px) {
    margin-top: 25px;
    width: 280px;

    button {
        width: 100%;
      }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
