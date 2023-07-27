"use client";

import { useState } from "react";

export const useCartProducts = () => {
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState({});

  const fetchCartProducts = async (id) => {
    return fetch(`https://dummyjson.com/carts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCartProducts(data);

        return data;
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };

  return { cartProducts, fetchCartProducts, loading };
};
