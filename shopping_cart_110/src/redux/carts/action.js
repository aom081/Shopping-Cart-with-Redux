import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";

export const addToCart = (product) => {
  console.log("add to cart function");

  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const increaseQuantity = (productId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: productId,
  };
};
export const decreaseQuantity = (productId) => {
  console.log("decrease function");

  return {
    type: DECREASE_QUANTITY,
    payload: productId,
  };
};
