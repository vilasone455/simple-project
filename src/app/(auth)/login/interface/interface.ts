import { type FieldValues } from "react-hook-form";

export interface ILoginProps {
  onSubmit: ISubmit
}

export type ISubmit = (formData: ILoginVariables) => void;

export interface ILoginVariables extends FieldValues {
  username: string
  password: string
}
