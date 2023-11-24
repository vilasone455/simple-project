import { useLogin } from "@refinedev/core";
import { type ISubmit, type ILoginVariables } from "../interface/interface";

function useSubmitService(): ISubmit {
  const { mutate: login } = useLogin<ILoginVariables>();
  return (formData: ILoginVariables): void => {
    login(formData);
  };
}

export default useSubmitService;
