"use client";

import ProductContext from "@/context/productContext";
import { useContext, useEffect, useState } from "react";
import { useSearchProduct } from "./useSearchProduct";
import { filterArrByObj } from "@/utils";

export const useProducts = () => {
  const [allData, setAllData] = useState([]);

  const [products, setProducts] = useContext(ProductContext);
  const { searchProduct } = useSearchProduct();

  const fetchProducts = async () => {
    return fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setAllData(data.products);

        return data.products;
      });
  };

  useEffect(() => {
    const filters = JSON.parse(sessionStorage.getItem("product-filter"));

    if (filters && Object.keys(filters).length !== 0) {
      fetchProducts().then((data) => {
        const filteredProduct = filterArrByObj(data, filters);
        setProducts(filteredProduct);
      });
    } else {
      fetchProducts();
    }
  }, []);

  return { products, allData, fetchProducts };
};
