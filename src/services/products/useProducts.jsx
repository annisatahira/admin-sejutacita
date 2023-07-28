"use client";

import ProductContext from "@/context/productContext";
import { useContext, useEffect, useState } from "react";
import { filterArrByObj, filterMinMax } from "@/utils";

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

  const fetchData = async () => {
    const filters = JSON.parse(sessionStorage.getItem("product-filter"));

    if (filters && Object.keys(filters).length !== 0) {
      let filteredProducts = [];

      const products = await fetchProducts();
      filteredProducts = products;

      // for brand, category, product
      if (filters?.filter) {
        const filterData = await filterArrByObj(products, filters?.filter);
        filteredProducts = filterData;
      }

      // for min max
      if (filters?.range) {
        const filteredProductWIthRange = filterMinMax({
          data: filteredProducts,
          filterBy: "stock",
          minValue: parseInt(filters?.range?.minValue),
          maxValue: parseInt(filters?.range?.maxValue),
        });

        filteredProducts = filteredProductWIthRange;
      }

      setProducts(filteredProducts);
    } else {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ products });

  return { loading, products, allData, fetchProducts, fetchData };
};
