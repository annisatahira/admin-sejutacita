"use client";

import { useEffect, useState } from "react";

export const useCarts = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCarts = async () => {
    return fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data?.carts);
        setLoading(false);

        return data?.carts;
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return { carts, loading, fetchCarts };
};
