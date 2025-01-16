import axios, { AxiosResponse } from "axios"
export type QueryResponse = { data: any }


export const poster = async (url: string, payload?: unknown): Promise<QueryResponse> => {
  const path = `http://192.168.0.101:8000/${url}`
  try {
    const response = axios.post(path, payload)
    const data = await response
    return data
  } catch (error: any) {
    return error
  }
}
