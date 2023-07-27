"use client";

import ProductContext from "@/context/productContext";
import { useContext, useEffect, useState } from "react";
import { filterArrByObj } from "@/utils";

export const useProducts = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useContext(ProductContext);

  const fetchProducts = async () => {
    return fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setAllData(data?.products);
        setLoading(false);

        return data.products;
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };

  const fetchData = () => {
    const filters = JSON.parse(sessionStorage.getItem("product-filter"));

    if (filters && Object.keys(filters).length !== 0) {
      fetchProducts().then((data) => {
        const filteredProduct = filterArrByObj(data, filters);

        setProducts(filteredProduct);
      });
    } else {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, products, allData, fetchProducts, fetchData };
};
