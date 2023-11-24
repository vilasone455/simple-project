import React from "react";
import { HeadlessListInferencer } from "@refinedev/inferencer/headless";

export default {
  title: "User",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  component: HeadlessListInferencer,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/user",
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const inferencer = () => (
  <HeadlessListInferencer/>
);
