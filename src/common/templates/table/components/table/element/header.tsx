/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { type HeaderGroup, flexRender } from "@tanstack/react-table";

interface HeaderProps<TData> {
  getHeaderGroups: () => Array<HeaderGroup<TData>>
}

const Header = <TData,>({ getHeaderGroups }: HeaderProps<TData>): JSX.Element => {
  const renderTableHeader = (headerGroup: HeaderGroup<TData>): JSX.Element => {
    return (
      <tr className="text-center" key='header'>
        {headerGroup.headers.map((header, i) => {
          return (
            <th
              key={`header-${header.id}`}
              scope="col"
              className={`text-gray-500 dark:text-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium ${i === 0 ? "sticky left-0 z-10" : ""}`}
            >
              {!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          );
        })}
      </tr>
    );
  };

  const tableHeaders = getHeaderGroups().map((headerGroup) => {
    return renderTableHeader(headerGroup);
  });

  return (
    <thead className="bg-gray-50 dark:bg-gray-800">
      {tableHeaders}
    </thead>
  );
};

export default Header;
