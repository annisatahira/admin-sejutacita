"use client";
import { createContext, useState } from "react";

const ProductContext = createContext(2);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
