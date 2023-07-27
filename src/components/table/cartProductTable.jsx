"use client";
import DataTable from "@/components/table/dataTable";
import { useCartProducts } from "@/data/carts/useCartProducts";
import { useCarts } from "@/data/carts/useCarts";
import { useEffect } from "react";

export const CartProductTable = () => {
  const CartProductsColumn = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Product Name",
      accessorKey: "title",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Total",
      accessorKey: "total",
    },
  ];

  const { cartProducts, fetchCartProducts } = useCartProducts();

  useEffect(() => {
    fetchCartProducts(1);
  }, []);

  console.log({ hhhh: cartProducts });

  return (
    <DataTable
      id="cart"
      columns={CartProductsColumn}
      data={cartProducts?.products}
      fetchAll={fetchCartProducts}
    />
  );
};
