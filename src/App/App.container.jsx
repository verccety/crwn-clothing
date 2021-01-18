import React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import App from './App';
export const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

export const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const AppContainer = () => {
  const [setCurrentUser] = useMutation(SET_CURRENT_USER);
  const {
    data: { currentUser },
  } = useQuery(GET_CURRENT_USER);
  return (
    <App
      currentUser={currentUser}
      setCurrentUser={(user) => setCurrentUser({ variables: { user } })}
    />
  );
};


export default AppContainer