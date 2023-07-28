"use client";
import DataTable from "@/components/table/dataTable";
import { useProducts } from "@/services/products/useProducts";
import { useSearchProduct } from "@/services/products/useSearchProduct";
import Select from "../filter/select";
import { useContext, useEffect, useState } from "react";
import ProductContext from "@/context/productContext";
import MinMax from "../filter/minMax";

export const ProductTable = () => {
  const ProductColumns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorKey: "title",
      footer: "Name",
    },
    {
      header: "Price",
      accessorKey: "price",
      footer: "price",
    },
    {
      header: "Stock",
      accessorKey: "stock",
      footer: "Stock",
    },
    {
      header: "Brand",
      accessorKey: "brand",
      footer: "Brand",
    },
    {
      header: "Category",
      accessorKey: "category",
      footer: "Category",
    },
  ];

  const { loading, allData, fetchData } = useProducts();
  const [products, setProducts] = useContext(ProductContext);
  const [filters, setFilters] = useState({});

  const { searchProduct } = useSearchProduct();

  useEffect(() => {
    const allFilter = sessionStorage.getItem("product-filter");
    const objFilter = JSON.parse(allFilter);

    setFilters(objFilter);
  }, []);

  return (
    <DataTable
      id="product"
      columns={ProductColumns}
      data={products}
      showSearchBar={true}
      fetchSearch={searchProduct}
      searchBy={"title"}
      placeholderSearch={"Iphone X"}
      fetchAll={fetchData}
      showFilter={true}
      loading={loading}
      filters={
        <>
          <Select
            id="react-select-brand"
            title="Brand"
            options={allData}
            dataTable={products}
            setDataTable={setProducts}
            filterBy="brand"
            initialValue={{ label: filters?.filter?.brand }}
          />
          <Select
            id="react-select-category"
            title="Category"
            options={allData}
            dataTable={products}
            setDataTable={setProducts}
            filterBy="category"
            initialValue={{ label: filters?.filter?.category }}
          />
          <MinMax
            id="product"
            filterBy="stock"
            dataTable={products}
            setDataTable={setProducts}
            allData={allData}
          />
        </>
      }
    />
  );
};
