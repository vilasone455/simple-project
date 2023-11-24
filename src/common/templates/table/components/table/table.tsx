/* eslint-disable @typescript-eslint/naming-convention */
import React, { useMemo } from "react";
import { useTable } from "@refinedev/react-table";
import ListPagination from "../pagination/pagination";
import Header from "./element/header";
import Body from "./element/body";
import { type BaseRecord } from "@refinedev/core";
import type { TableProps } from "../../interface/interface";

export const Table = <TData extends BaseRecord>({ refineCoreProps, header }: TableProps<TData>): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const columns = useMemo(() => header(), []);
  const {
    getHeaderGroups, getRowModel,
    setOptions,
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    setPageSize,
  } = useTable<TData>({
    refineCoreProps,
    columns,
  });

  setOptions((prev) => ({ ...prev, meta: { ...prev.meta } }));

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-400 dark:divide-gray-700">
        <Header<TData> getHeaderGroups={getHeaderGroups} />
        <Body<TData> getRowModel={getRowModel} />
      </table>
      <ListPagination
        getState={getState}
        setPageIndex={setPageIndex}
        getCanPreviousPage={getCanPreviousPage}
        getPageCount={getPageCount}
        getCanNextPage={getCanNextPage}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default Table;
