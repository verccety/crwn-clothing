import { gql } from 'apollo-boost';
import {
  addItemToCart,
  getCartItemCount,
  getCartTotal,
  removeItemFromCart,
  clearItemFromCart,
} from './cart.utils';
//type definitons usually capitalized
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }

  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    ClearItemFromCart(item: Item!): [Item]!
    RemoveItemFromCart(item: Item!): [Item]!
    SetCurrentUser(user: User!): User!
  }
`;
// @client - means we're querying for the client, not backend
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`;

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

const relatedQueries = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems },
  });
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) },
  });
  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: { cartTotal: getCartTotal(newCartItems) },
  });
};

// root - top level obj that represents actual type
// args - args we can get access to inside mutation, args - variable gets passed into mutation/query
// context - cache and client itself
// info - info about query/mutation
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });
      return !cartHidden;
    },

    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(cartItems, item);
      relatedQueries(cache, newCartItems);

      return newCartItems;
    },
    removeItemFromCart: (_, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItems = removeItemFromCart(cartItems, item);

      relatedQueries(cache, newCartItems);
      return newCartItems;
    },

    clearItemFromCart: (_, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItems = clearItemFromCart(cartItems, item);
      relatedQueries(cache, newCartItems);
      return newCartItems;
    },

    setCurrentUser: (_, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user },
      });
    },
  },
};
