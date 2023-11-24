"use client";

import UserListTemplate from "@/common/templates/table/base";
import { type IUser } from "@/app/(protected)/user/interface/interface";
import { header } from "@/app/(protected)/user/lib/header";
import React from "react";
export default function UserTable(): JSX.Element {
  const refineCoreProps = { resource: "user" };
  return (
    <>
      <UserListTemplate<IUser>
        refineCoreProps={refineCoreProps}
        header={header}
      />
    </>
  );
}
