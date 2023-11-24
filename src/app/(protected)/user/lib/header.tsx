import { type IUser } from "../interface/interface";
import { type ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Badge } from "@/common/elements/badge";

const userListColumns: Array<ColumnDef<IUser>> = [
  {
    id: "username",
    accessorKey: "username",
    header: "ຊື່",
  },
  {
    id: "isActive",
    accessorKey: "isActive",
    header: "ສະຖານະ",
    cell: (props) => {
      const status = props.getValue() as boolean;
      const statusText = (status) ? "ເປິດໃຊ້ງານ" : "ປິດການໃຊ້ງານ";
      return (<Badge choice={status}>{statusText}</Badge>);
    },
  },
  {
    id: "groups",
    accessorKey: "groups",
    header: "ສິດ",
    cell: (props) => {
      const groups = props.getValue() as string[];
      return (
        groups.map((value: string, index) => {
          return <Badge key={`badeg-${index}`} choice={false}>{value}</Badge>;
        }));
    },
  },
  {
    id: "dateJoined",
    accessorKey: "dateJoined",
    header: "ມື້ສ້າງບັນຊີ",
    cell: (props) => {
      const dateValue = props.getValue();
      if (typeof dateValue === "string") {
        return moment(dateValue).format("DD MMM YYYY");
      }
      return "";
    },
  },
];

export const header = (): Array<ColumnDef<IUser>> => {
  return userListColumns;
};
