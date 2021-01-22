export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    cartItems.forEach((item) =>
      item.id === cartItemToAdd.id ? (item.quantity = item.quantity + 1) : item
    );
  } else {
    cartItems.push({ ...cartItemToAdd, quantity: 1 });
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    const indexToRemove = cartItems.findIndex((cartItem) => cartItem.id === cartItemToRemove.id);
    cartItems.splice(indexToRemove, 1);
  } else {
    cartItems.forEach((cartItem) =>
      cartItem.id === cartItemToRemove.id ? (cartItem.quantity = cartItem.quantity - 1) : cartItem
    );
  }
};
