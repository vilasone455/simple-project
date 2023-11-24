import { type ColumnDef } from "@tanstack/react-table";
import { type BaseRecord } from "@refinedev/core";

export interface IRefineCoreProps {
  resource: string
}

export interface TableProps<TData extends BaseRecord> {
  refineCoreProps: IRefineCoreProps
  header: () => Array<ColumnDef<TData>>
}
