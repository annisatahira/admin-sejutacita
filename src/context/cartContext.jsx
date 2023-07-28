"use client";
import { createContext, useState } from "react";

const CartContext = createContext(2);

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  return (
    <CartContext.Provider value={[carts, setCarts]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
