/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { type TableState } from "@tanstack/react-table";

interface PaginationSelectProps {
  getState: () => TableState
  setPageSize: (size: number) => void
}

const selectRow = [10, 20, 30, 40, 50];

const PaginationSelect: React.FC<PaginationSelectProps> = ({
  getState,
  setPageSize,
}) => (
  <select
    className="py-2 px-4 h-10 border  rounded-lg  my-auto"
    value={getState().pagination.pageSize}
    onChange={(e) => {
      setPageSize(Number(e.target.value));
    }}
  >
    {selectRow.map((pageSize) => (
      <option key={pageSize} value={pageSize} >
        ສະແດງ {pageSize}
      </option>
    ))}
  </select>
);

export default PaginationSelect;
