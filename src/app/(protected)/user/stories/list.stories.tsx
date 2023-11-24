import React from "react";
import UserListTemplate from "@/common/templates/table/base";
import { header } from "../lib/header";
import { type IUser } from "../interface/interface";
const refineCoreProps = { resource: "user" };

export default {
  title: "User",
  component: UserListTemplate,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/user",
      },
    },
  },
};
export const list = () => (
  <UserListTemplate<IUser>
    refineCoreProps={refineCoreProps}
    header={header}
  />
);
