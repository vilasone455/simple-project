/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
/* eslint-disable  @typescript-eslint/no-unsafe-member-access  */
/* eslint-disable @typescript-eslint/naming-convention */

import { type AxiosInstance, type AxiosResponse } from "axios";
import { stringify } from "query-string";
import { type DataProvider } from "@refinedev/core";
import deleteOneDataProvider from "./deleteOne";
import { axiosInstance, generateSort, generateFilter } from "@refinedev/simple-rest/src/utils";

interface Option {
  method: "get" | "delete" | "head" | "options" | "post" | "put" | "patch"
  httpClient: AxiosInstance
  apiUrl: string
  url: string
  requestUrl: string
}
async function getResponse<TPayload>(options: Option, payload: TPayload): Promise<AxiosResponse> {
  const { method, httpClient, apiUrl, url, requestUrl } = options;
  let axiosResponse;
  switch (method) {
    case "put":
    case "post":
    case "patch":
      axiosResponse = await httpClient[method](`${apiUrl}/${url}`, payload);
      break;
    case "delete":
      axiosResponse = await httpClient.delete(`${apiUrl}/${url}`, {
        data: payload,
      });
      break;
    default:
      axiosResponse = await httpClient.get(requestUrl);
      break;
  }
  return axiosResponse;
}

function configHeader(headers: object, httpClient: AxiosInstance): boolean {
  if (headers != null) {
    httpClient.defaults.headers = {
      ...httpClient.defaults.headers,
      ...headers,
    };
  }
  return true;
}

const restDataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance,
): Omit<Required<DataProvider>, "createMany" | "updateMany" | "deleteMany"> => {
  // Start with the base dataProvider
  const baseDataProvider = deleteOneDataProvider(apiUrl, httpClient);
  return {
    ...baseDataProvider, // Include the base methods
    custom: async({ url, method, filters, sorters, payload, query, headers }) => {
      let requestUrl = `${url}?`;

      if (sorters != null) {
        const generatedSort = generateSort(sorters);
        if (generatedSort != null) {
          const { _sort, _order } = generatedSort;
          const sortQuery = {
            _sort: _sort.join(","),
            _order: _order.join(","),
          };
          requestUrl = `${requestUrl}&${stringify(sortQuery)}`;
        }
      }
      if (filters != null) {
        const filterQuery = generateFilter(filters);
        requestUrl = `${requestUrl}&${stringify(filterQuery)}`;
      }
      if (query !== undefined) {
        requestUrl = `${requestUrl}&${stringify(query as Record<string, never>)}`;
      }
      configHeader(headers as object, httpClient);
      const axiosResponse = await getResponse({ method, httpClient, apiUrl, url, requestUrl }, payload);
      const { data } = axiosResponse;

      return await Promise.resolve({ data });
    },
  };
};
export default restDataProvider;
