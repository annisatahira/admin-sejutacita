"use client";

import { useProducts } from "@/services/products/useProducts";
import ConnectedChart from "@/components/charts/connectedChart";
import Loading from "@/components/loading";

export default function Dashboard() {
  const { fetchProducts, loading } = useProducts();

  return (
    <main className="flex flex-col min-h-screen">
      <h1 className="font-bold text-3xl mb-3">Dashboard</h1>
      <h2 className="mb-5">Total of products by category</h2>
      {!loading ? (
        <ConnectedChart
          infoChart="Total Product"
          fetchData={fetchProducts}
          labelChart="category"
          value="stock"
          bgColor={["#5A96E3", "#A1C2F1"]}
        />
      ) : (
        <Loading />
      )}
    </main>
  );
}
