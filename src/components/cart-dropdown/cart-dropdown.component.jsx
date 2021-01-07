import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state),
})
export default connect(mapStateToProps)(CartDropdown)
