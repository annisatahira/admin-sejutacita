"use client"

import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table"
import SearchBar from "./searchBar";
import FilterBar from "./FIlterBar";

const DataTable = (props) => {
    const { columns, data, showSearchBar = false, fetchSearch, fetchAll, id } = props;

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    return (
        <div className="m-6 relative overflow-x-auto">
            {showSearchBar &&
                <div className="w-1/3 relative">
                    <SearchBar id={id} fetchAll={fetchAll} fetchSearch={fetchSearch} />
                </div>
            }
            <FilterBar />
            <div className="shadow-lg m-1 rounded-md">
                <div>
                    {data.length > 0 ?
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th scope="col" className="px-6 py-3" key={header.id}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {table.getRowModel().rows.map(row => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td className="px-6 py-4" key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        : "Item not found"
                    }
                </div>
                <div className="bg-white flex p-4 gap-2 justify-end">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full"
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                    >
                        Prev
                    </button>
                    <div className="flex justify-center items-center text-sm gap-1">
                        <div>{table.getState().pagination.pageIndex + 1}</div>
                        <div>/</div>
                        <div>{table.getPageCount()}</div>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full"
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DataTable