import React from 'react';
import {
  CartItemContainer,
  ItemDetailsContainer,
  NameSpanContainer,
  CartItemImage,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='title' />
      <ItemDetailsContainer>
        <NameSpanContainer>{name}</NameSpanContainer>
        <NameSpanContainer>
          {quantity} x ${price}
        </NameSpanContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
