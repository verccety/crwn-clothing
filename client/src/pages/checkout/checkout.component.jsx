import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  StyledCheckoutHeader,
  StyledCheckoutPage,
  StyledHeaderBlock,
  StyledTestWarning,
  StyledTotal,
} from './checkout.styles';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <StyledCheckoutPage>
      <StyledCheckoutHeader>
        <StyledHeaderBlock>
          <span>Product</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Description</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Quantity</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Price</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Remove</span>
        </StyledHeaderBlock>
      </StyledCheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <StyledTotal>
        <span>TOTAL: ${total}</span>
      </StyledTotal>
      <StyledTestWarning>
        *Please use the following test credit cart for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </StyledTestWarning>

      <StripeCheckoutButton price={total} />
    </StyledCheckoutPage>
  );
};

export default CheckoutPage;
