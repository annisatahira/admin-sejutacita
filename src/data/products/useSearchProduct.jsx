"use client";

import { useContext, useEffect } from "react";
import ProductContext from "@/context/productContext";

export const useSearchProduct = () => {
  const [products, setProducts] = useContext(ProductContext);

  const searchProduct = (key) => {
    fetch(`https://dummyjson.com/products/search?q=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  return { products, searchProduct };
};
