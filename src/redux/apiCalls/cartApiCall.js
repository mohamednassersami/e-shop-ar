import { addItemToCart, removeItemFromCart } from "../slices/cartSlice";

// Add Item To Cart
export function addToCart(newItem) {
  return (dispatch, getState) => {
    dispatch(addItemToCart(newItem));
    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}

// remove Item From Cart
export function removeFromCart(id) {
  return (dispatch, getState) => {
    dispatch(removeItemFromCart(id));

    const { cart } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  };
}
