"use client";

import { useState } from "react";

export const useDetailUser = () => {
  const [user, setUser] = useState({});

  const fetchUser = async (id) => {
    return fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);

        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  return { user, fetchUser };
};
