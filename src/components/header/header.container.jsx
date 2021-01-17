import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header.component';

//@client means we're looking in local cache, not on server

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {
      ({ data: { cartHidden } }) => <Header hidden={cartHidden} /> // Header component now receiving hidden value from query
    }
  </Query>
);

export default HeaderContainer

