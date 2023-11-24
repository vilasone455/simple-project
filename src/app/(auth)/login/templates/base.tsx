import React from "react";
import FormLayout from "./layout/formLayout";
import Form from "./components/form";
import { type ILoginProps } from "../interface/interface";

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoginFormTemplate = ({ onSubmit }: ILoginProps): JSX.Element => {
  return (
    <FormLayout>
      <Form onSubmit={onSubmit} />
    </FormLayout>
  );
};

export default LoginFormTemplate;
