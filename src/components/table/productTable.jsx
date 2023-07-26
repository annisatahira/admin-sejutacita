"use client";
import DataTable from "@/components/table/dataTable";
import { useProducts } from "@/data/products/useProducts";
import { useSearchProduct } from "@/data/products/useSearchProduct";
import Select from "../dropdown/select";
import { useContext } from "react";
import ProductContext from "@/context/productContext";

const ProductTable = () => {
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

  const { allData, fetchProducts } = useProducts();
  const [products, setProducts] = useContext(ProductContext);

  const { searchProduct } = useSearchProduct();

  return (
    <DataTable
      id="product"
      columns={ProductColumns}
      data={products}
      showSearchBar={true}
      fetchSearch={searchProduct}
      fetchAll={fetchProducts}
      filters={
        <>
          <Select
            id="react-select-brand"
            title="Brand"
            options={allData}
            setDataTable={setProducts}
            filterBy="brand"
          />
          <Select
            id="react-select-category"
            title="Category"
            options={allData}
            setDataTable={setProducts}
            filterBy="category"
          />
          <Select
            id="react-select-name"
            title="Name"
            options={allData}
            setDataTable={setProducts}
            filterBy="title"
          />
        </>
      }
    />
  );
};

export default ProductTable;
