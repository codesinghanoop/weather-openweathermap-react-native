import { api } from '@/Services/api'
import fetchLatAndLong from './fetchLatAndLong'

export const latLongApi = api.injectEndpoints({
  endpoints: build => ({
    fetchLatAndLong: fetchLatAndLong(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchLatAndLongQuery } = latLongApi
