"use client";

import { useState } from "react";

export const useCartProducts = () => {
  const [cartProducts, setCartProducts] = useState({});

  const fetchCartProducts = async (id) => {
    return fetch(`https://dummyjson.com/carts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setCartProducts(data);

        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  return { cartProducts, fetchCartProducts };
};
