import React from "react";
import LoginFormTemplate from "@/app/(auth)/login/templates/base";
import useSubmitService from "@/app/(auth)/login/service/submit";

export default {
  title: "Login",
  component: LoginFormTemplate,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/login",
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const form = () => {
  const onSubmit = useSubmitService();
  return <LoginFormTemplate onSubmit={onSubmit} />;
};
