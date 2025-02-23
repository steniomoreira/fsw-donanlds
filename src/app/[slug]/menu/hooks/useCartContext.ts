import { useContext } from "react";

import { CartContext } from "../context/cart";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  return cartContext;
};
