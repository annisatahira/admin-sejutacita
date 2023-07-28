"use client";
import DataTable from "@/components/table/dataTable";
import { useCartProducts } from "@/services/carts/useCartProducts";
import { useParams } from "next/navigation";
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

  const param = useParams();

  const { cartProducts, fetchCartProducts, loading } = useCartProducts();

  useEffect(() => {
    fetchCartProducts(param.id);
  }, []);

  return (
    <DataTable
      id="cart"
      columns={CartProductsColumn}
      data={cartProducts?.products}
      fetchAll={fetchCartProducts}
      loading={loading}
    />
  );
};
