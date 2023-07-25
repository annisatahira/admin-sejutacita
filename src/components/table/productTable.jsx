"use client"
import DataTable from "@/components/table/dataTable"
import { useProducts } from "@/data/products/useProducts"
import { useSearchProduct } from "@/data/products/useSearchProduct"

const ProductTable = () => {
    const ProductColumns = [{
        header: 'ID',
        accessorKey: 'id',
        footer: 'ID'
    },
    {
        header: 'Name',
        accessorKey: 'title',
        footer: 'Name'
    },
    {
        header: 'Price',
        accessorKey: 'price',
        footer: 'price'
    },
    {
        header: 'Stock',
        accessorKey: 'stock',
        footer: 'Stock'
    },
    {
        header: 'Brand',
        accessorKey: 'brand',
        footer: 'Brand'
    },
    {
        header: 'Category',
        accessorKey: 'category',
        footer: 'Category'
    }
    ]

    const { products, fetchProducts } = useProducts();

    const { searchProduct } = useSearchProduct();

    return (
        <DataTable
            id='product'
            columns={ProductColumns}
            data={products}
            showSearchBar={true}
            fetchSearch={searchProduct}
            fetchAll={fetchProducts}
        />
    )
}

export default ProductTable;