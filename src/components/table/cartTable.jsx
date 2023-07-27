"use client";
import DataTable from "@/components/table/dataTable";
import { useCarts } from "@/data/carts/useCarts";

export const CartTable = () => {
  const CartColumns = [
    {
      header: "USER ID",
      accessorKey: "userId",
    },
    {
      header: "Total Products",
      accessorKey: "totalProducts",
    },
    {
      header: "Total Quantity",
      accessorKey: "totalQuantity",
    },
    {
      header: "Total",
      accessorKey: "total",
    },
    {
      header: "Discounted Total",
      accessorKey: "discountedTotal",
    },
  ];

  const { carts, fetchCarts } = useCarts();

  return (
    <DataTable
      id="cart"
      columns={CartColumns}
      data={carts}
      fetchAll={fetchCarts}
    />
  );
};
