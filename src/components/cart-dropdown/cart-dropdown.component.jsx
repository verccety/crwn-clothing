import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
