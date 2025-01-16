import axios, { AxiosResponse } from "axios"
export type QueryResponse = { data: any }


export const poster = async (url: string, payload?: unknown): Promise<QueryResponse> => {
  const path = `http://10.80.2.192:8000/${url}`
  try {
    const response = axios.post(path, payload)
    const data = await response
    return data
  } catch (error: any) {
    return error
  }
}
