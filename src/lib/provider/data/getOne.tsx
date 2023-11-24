/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type AxiosInstance } from "axios";
import { type DataProvider } from "@refinedev/core";
import updateDataProvider from "@/lib/provider/data/update";
import { axiosInstance } from "@refinedev/simple-rest/src/utils";
const getOneDataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance,
): Omit<Required<DataProvider>, "createMany" | "updateMany" | "deleteMany"> => {
  // Start with the base dataProvider
  const baseDataProvider = updateDataProvider(apiUrl, httpClient);

  // Add the custom getList method
  return {
    ...baseDataProvider, // Include the base methods
    getOne: async({ resource, id }) => {
      const url = `${apiUrl}/${resource}/${id}`;
      const { data } = await httpClient.get(url);
      return {
        data,
      };
    },
  };
};
export default getOneDataProvider;
