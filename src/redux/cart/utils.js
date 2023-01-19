

const addItemToCart = (cartItems, cartItemTocart) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemTocart.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemTocart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemTocart, quantity: 1 }];
};
export default addItemToCart