import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import { API_URL } from "./constants";
import mockSubjects from "../lib/mockSubjects";
import { get } from "http";
import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

// export { mockSubjects, Subject };
export const dataProvider:DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}:GetListParams):Promise<GetListResponse<TData>> => {
    if (resource === 'subjects') {
      return {
        data: mockSubjects as unknown as TData[],
        total: mockSubjects.length,
      }
    }else {
      return {
        data: [] as TData[],
        total: 0,
      }
    }

  },
  getOne: async () => {throw new Error("Method not implemented.")},
  getMany: async () => {throw new Error("Method not implemented.")},
  create: async () => {throw new Error("Method not implemented.")},
  update: async () => {throw new Error("Method not implemented.")},
  deleteOne: async () => {throw new Error("Method not implemented.")},
  deleteMany: async () => {throw new Error("Method not implemented.")},
  getApiUrl: () => '',

}
