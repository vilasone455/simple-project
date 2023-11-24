/* eslint-disable @typescript-eslint/naming-convention  */
/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
/* eslint-disable  @typescript-eslint/no-unsafe-member-access  */

import { type AxiosInstance, type AxiosResponse } from "axios";
import { stringify } from "query-string";
import { type CrudFilters, type CrudSorting, type DataProvider, type Pagination } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { axiosInstance, generateFilter, generateSort } from "@refinedev/simple-rest/src/utils";
import { getSessionToken } from "@/lib/provider/data/sessionToken";

const initialQuery: {
  page_size?: number
  page?: number
  _sort?: string
  _order?: string
} = {};

interface Response {
  count: number
  results: []
}

const getListDataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance,
): Omit<Required<DataProvider>, "createMany" | "updateMany" | "deleteMany"> => {
  const baseDataProvider = dataProvider(apiUrl, httpClient);
  return {
    ...baseDataProvider, // Include the base methods
    getList: async({ resource, pagination, filters, sorters, meta }) => {
      const headers = meta?.headers ?? {};
      const token = await getSessionToken(httpClient);

      if (token !== "") {
        headers.Authorization = `Bearer ${token}`;
      }

      const url: string = `${apiUrl}/${resource}`;
      const { query, queryFilters } = generateQuery({ pagination, filters, sorters });

      const { data }: AxiosResponse<Response> = await httpClient.get(`${url}?${stringify(query)}&${stringify(queryFilters)}`, { headers });

      const total: number = data.count;
      return {
        data: data.results,
        total,
      };
    },
  };
};

const generateQuery = ({
  pagination,
  filters,
  sorters,
}: {
  pagination: Pagination | undefined
  filters: CrudFilters | undefined
  sorters: CrudSorting | undefined
}): {
  query: { _order?: string, page?: number, _sort?: string, page_size?: number }
  queryFilters: Record<string, string>
} => {
  const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {};
  const queryFilters = generateFilter(filters);
  const query = { ...initialQuery };

  if (mode === "server") {
    query.page = current;
    query.page_size = pageSize;
  }

  const generatedSort = generateSort(sorters);
  if (generatedSort != null) {
    const { _sort, _order } = generatedSort;
    query._sort = _sort.join(",");
    query._order = _order.join(",");
  }

  return { query, queryFilters };
};

export default getListDataProvider;

