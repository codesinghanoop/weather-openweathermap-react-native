import { api } from '@/Services/api'
import fetchFutureData from './fetchFutureData'

export const forcastApi = api.injectEndpoints({
  endpoints: build => ({
    fetchFutureData: fetchFutureData(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchFutureDataQuery } = forcastApi
