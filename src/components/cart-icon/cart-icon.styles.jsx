import styled, { css } from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const StyledItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
