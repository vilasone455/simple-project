/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import Table from "./components/table/table";
import TableLayout from "./layout/tableLayout";
import { type BaseRecord, useCan } from "@refinedev/core";
import type { TableProps } from "./interface/interface";

export const UserListTemplate = <TData extends BaseRecord,>({ refineCoreProps, header }: TableProps<TData>): JSX.Element => {
  const { data: canAccess } = useCan({
    resource: "user",
    action: "list",
  });
  return (
    <TableLayout>
      {((canAccess?.can) === true) && (<Table<TData> refineCoreProps={refineCoreProps} header={header}/>)}

    </TableLayout>
  );
};

export default UserListTemplate;
