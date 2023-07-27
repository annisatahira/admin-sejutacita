"use client";

import { useState } from "react";

export const useDetailUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUser = async (id) => {
    return fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);

        return data;
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };

  return { user, fetchUser };
};
