"use client";

import { useEffect, useState } from "react";

export const useCarts = () => {
  const [carts, setCarts] = useState([]);

  const fetchCarts = async () => {
    return fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setCarts(data.carts);

        return data.carts;
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return { carts, fetchCarts };
};
