"use client"

import ProductContext from "@/context/productContext";
import { useContext, useEffect, useState } from "react";
import { useSearchProduct } from "./useSearchProduct";

export const useProducts = () => {

    const [products, setProducts] = useContext(ProductContext);
    const { searchProduct } = useSearchProduct();

    const fetchProducts = () => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    };

    useEffect(() => {
        const key = sessionStorage.getItem('product-search');

        // check if there is search key
        key ? searchProduct(key) : fetchProducts();

    }, []);

    return { products, fetchProducts };
};