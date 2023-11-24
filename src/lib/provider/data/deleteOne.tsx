/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type AxiosInstance } from "axios";
import { type DataProvider } from "@refinedev/core";
import getOneDataProvider from "@/lib/provider/data/getOne";
import { axiosInstance } from "@refinedev/simple-rest/src/utils";
const deleteOneDataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance,
): Omit<Required<DataProvider>, "createMany" | "updateMany" | "deleteMany"> => {
  // Start with the base dataProvider
  const baseDataProvider = getOneDataProvider(apiUrl, httpClient);
  // Add the custom getList method
  return {
    ...baseDataProvider, // Include the base methods

    deleteOne: async({ resource, id, variables }) => {
      const url = `${apiUrl}/${resource}/${id}`;

      const { data } = await httpClient.delete(url, {
        data: variables,
      });

      return {
        data,
      };
    },
  };
};

export default deleteOneDataProvider;
