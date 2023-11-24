"use client";

import React from "react";
import useSubmitService from "./service/submit";
import LoginFormTemplate from "@/app/(auth)/login/templates/base";

export default function Login(): JSX.Element {
  const onSubmit = useSubmitService();

  return <LoginFormTemplate onSubmit={onSubmit}/>;
}

Login.layout = "auth";
