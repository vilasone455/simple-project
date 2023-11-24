import React from "react";
import UserListTemplate from "@/common/templates/table/base";
import { header } from "../../lib/header";
import { type IUser } from "../../interface/interface";
import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
const refineCoreProps = { resource: "user" };

export default {
  title: "User/tests",
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
const story = () => (
  <UserListTemplate<IUser>
    refineCoreProps={refineCoreProps}
    header={header}
  />
);

export const List = story.bind({});

// @ts-ignore
List.play = async({ canvasElement }) => {
  const canvas = within(canvasElement);

  const adminNameCells = await canvas.findAllByText("admin");
  adminNameCells.forEach(async(cell) => {
    expect(cell).toBeInTheDocument();
  });

  const accountStatus = await canvas.findByText("ເປິດໃຊ້ງານ");
  expect(accountStatus).toBeInTheDocument();
};
