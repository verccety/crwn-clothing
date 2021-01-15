import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CardDropdownContainer = compose(withRouter, connect(mapStateToProps))(CartDropdown);

export default CardDropdownContainer;
