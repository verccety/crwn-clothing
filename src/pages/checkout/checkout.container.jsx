import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = () => {
  const {
    data: { cartItems, cartTotal },
  } = useQuery(GET_CART_ITEMS);
  return <CheckoutPage cartItems={cartItems} total={cartTotal} />;
};

export default CheckoutPageContainer;
