import { api } from '@/Services/api'
import fetchForecast from './fetchCurrentWeather'

export const forcastApi = api.injectEndpoints({
  endpoints: build => ({
    fetchForecast: fetchForecast(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchForecastQuery } = forcastApi
