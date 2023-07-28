"use client";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import SearchBar from "../search";
import { AiFillEye } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import Link from "next/link";
import Loading from "../loading";
import NotFoundData from "../notFound";

const DataTable = (props) => {
  const {
    columns,
    data = [],
    showSearchBar = false,
    showFilter = false,
    fetchSearch,
    searchBy,
    fetchAll,
    id,
    filters,
    showAction = false,
    loading,
    placeholderSearch,
  } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="relative">
      {showSearchBar && (
        <div className="w-full md:w-1/3 relative md:mx-1">
          <SearchBar
            id={id}
            fetchAll={fetchAll}
            fetchSearch={fetchSearch}
            searchBy={searchBy}
            placeholder={placeholderSearch}
          />
        </div>
      )}
      {showFilter && (
        <div className="mb-4 mx-1 bg-white p-3 rounded-lg shadow-md">
          <div className="flex gap-3">
            <BiFilter className="text-3xl" />
            <h1 className="text-xl font-bold">Filter</h1>
          </div>
          <hr className="my-3" />
          <div className="grid md:grid-cols-4 gap-3">{filters}</div>
        </div>
      )}
      <div className="shadow-lg m-1 rounded-md">
        <div className="overflow-x-auto">
          {!loading ? (
            <>
              {data?.length > 0 ? (
                <>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <th
                              scope="col"
                              className="px-6 py-3"
                              key={header.id}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </th>
                          ))}
                          {showAction && <th>Action</th>}
                        </tr>
                      ))}
                    </thead>
                    <tbody className="bg-white border-b">
                      {table.getRowModel().rows.map((row) => (
                        <tr
                          className="bg-white border-b hover:bg-blue-50"
                          key={row.id}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td className="px-6 py-4" key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                          {showAction && (
                            <td className="px-6 py-4">
                              <Link
                                href={`/dashboard/carts/${row.original.id}`}
                                className="flex gap-2 font-medium hover:text-blue-600 hover:font-bold"
                              >
                                <AiFillEye className="text-xl" />
                                <span>Detail</span>
                              </Link>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <NotFoundData />
              )}
            </>
          ) : (
            <Loading />
          )}
        </div>
        <div className="bg-white flex p-4 gap-2 justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
