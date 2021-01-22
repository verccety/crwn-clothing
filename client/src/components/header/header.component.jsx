import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentuser } from '../../redux/user/user.selector';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import { signOutStart } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentuser);
  const hidden = useSelector(selectCartHidden);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdownContainer />}
    </HeaderContainer>
  );
};

export default Header;
