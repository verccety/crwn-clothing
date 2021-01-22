import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    toggleCartHidden(state) {
      state.hidden = !state.hidden;
    },
    addItem(state, action) {
      addItemToCart(state.cartItems, action.payload);
    },
    removeItem(state, action) {
      removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      const index = state.cartItems.indexOf(action.payload.id);
      state.cartItems.splice(index, 1);
    },
    clearCart(state) {
      state.cartItems = [];
    },
    fetchCartSuccess(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
  fetchCartSuccess,
} = cartSlice.actions;
export default cartSlice.reducer;
