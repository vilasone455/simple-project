/* eslint-disable @typescript-eslint/naming-convention */
import { type TableState } from "@tanstack/react-table";
export interface IPagination {
  getState: () => TableState
  setPageSize: (size: number) => void
  setPageIndex: (index: number) => void
  getCanPreviousPage: () => boolean
  getPageCount: () => number
  getCanNextPage: () => boolean
}
