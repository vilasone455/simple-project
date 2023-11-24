import React from "react";
import Input from "./elements/formInput";
import { useForm } from "@refinedev/react-hook-form";
import { type ILoginVariables, type ILoginProps } from "../../interface/interface";

// eslint-disable-next-line @typescript-eslint/naming-convention
const Form = ({ onSubmit }: ILoginProps): JSX.Element => {
  const { register, handleSubmit } = useForm<ILoginVariables>();
  const onSubmitHandler = handleSubmit((formData) => {
    onSubmit(formData as ILoginVariables);
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmitHandler}>
      <div className="grid gap-y-4">
        <Input register={register} name="username" type="text" id="username" label="username"/>
        <Input register={register} name="password" type="password" id="password" label="password"/>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Form;
