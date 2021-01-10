import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import {
  StyledButton,
  StyledCartItems,
  StyledCardDropdown,
  StyledEmptyMessage,
} from './cart-dropdown.styles';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <StyledCardDropdown>
      <StyledCartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
        )}
      </StyledCartItems>
      <StyledButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </StyledButton>
    </StyledCardDropdown>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
