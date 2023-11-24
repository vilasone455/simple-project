/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { type Cell, type RowModel, type Row } from "@tanstack/table-core";
import { flexRender } from "@tanstack/react-table";

interface BodyProps<TData> {
  getRowModel: () => RowModel<TData>
}

const Body = <TData,>({ getRowModel }: BodyProps<TData>): JSX.Element => {
  const renderTableCell = (cell: Cell<TData, unknown>, j: number): JSX.Element => {
    return (
      <td
        key={`cell-${cell.id}`}
        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${j === 0 ? "sticky left-0 bg-white" : ""}`}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
    );
  };

  const renderTableRow = (row: Row<TData>): JSX.Element => {
    return (
      <tr className="text-center" key={`row-${row.id}`}>
        {row.getVisibleCells().map((cell, j) => {
          return renderTableCell(cell, j);
        })}
      </tr>
    );
  };

  const tableRows = getRowModel().rows.map((row) => {
    return renderTableRow(row);
  });

  return (
    <tbody className="divide-y divide-gray-400 dark:divide-gray-700">
      {tableRows}
    </tbody>
  );
};

export default Body;
