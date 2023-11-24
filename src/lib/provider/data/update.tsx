/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable  @typescript-eslint/no-unsafe-member-access  */

import { type AxiosInstance } from "axios";
import { type DataProvider } from "@refinedev/core";
import createDataProvider from "@/lib/provider/data/create";
import { axiosInstance } from "@refinedev/simple-rest/src/utils";
const updateDataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance,
): Omit<Required<DataProvider>, "createMany" | "updateMany" | "deleteMany"> => {
  const baseDataProvider = createDataProvider(apiUrl, httpClient);
  return {
    ...baseDataProvider, // Include the base methods
    update: async({ resource, id, variables, meta }) => {
      const headers = meta?.headers ?? {};
      const url = `${apiUrl}/${resource}/${id}`;
      const formData = new FormData();
      const isFormData = headers["content-type"] === "multipart/form-data";
      if (isFormData) {
        for (const key in variables) {
          const fileOrText = variables[key] instanceof FileList ? (variables[key] as FileList).item(0) as File : variables[key] as string;
          formData.append(key, fileOrText);
        }
      }
      const formDataOrJson = isFormData ? formData : variables;
      const { data } = await httpClient.patch(url, formDataOrJson, { headers });
      return {
        data,
      };
    },
  };
};

export default updateDataProvider;
