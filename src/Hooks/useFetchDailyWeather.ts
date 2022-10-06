import { useLazyFetchFutureDataQuery } from '@/Services/modules/fetchFutureWeatherData'

const useFetchDaily = () => {
  const [fetchDaily, { data, isSuccess, isLoading, error }] =
    useLazyFetchFutureDataQuery()

  return {
    data,
    isSuccess,
    isLoading,
    error,
    fetchDaily,
  }
}

export default useFetchDaily
