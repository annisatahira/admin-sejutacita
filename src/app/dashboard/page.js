"use client";

// import BarChart from "@/components/charts/bar";
import { useProducts } from "@/data/products/useProducts";
// import { getKeyData } from "@/utils";
// import { useEffect, useState } from "react";
import ConnectedChart from "@/components/charts/ConnectedChart";

export default function Dashboard() {
  const { fetchProducts } = useProducts();

  return (
    <main className="flex flex-col min-h-screen">
      <h1 className="font-bold text-3xl mb-3">Dashboard</h1>
      <h2 className="mb-5">Total of products by category</h2>
      <ConnectedChart
        infoChart="Total Product"
        fetchData={fetchProducts}
        labelChart="category"
        value="stock"
        bgColor={["#5A96E3", "#A1C2F1"]}
      />
    </main>
  );
}
