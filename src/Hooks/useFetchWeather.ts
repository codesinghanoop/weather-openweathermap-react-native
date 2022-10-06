import { SetStateAction, useEffect, useState } from 'react'
import { useLazyFetchForecastQuery } from '@/Services/modules/currentWeatherData'
import useFetchLatAndLong from './useFetchLatAndLong'
import useFetchDaily from './useFetchDailyWeather'

const useFetchWeather = () => {
  const [lat, setLat] = useState(38.7259284)
  const [long, setLong] = useState(-9.137382)

  //Hook to fetch current day weather data
  const [fetchWeatherData, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchForecastQuery()

  //Hook to fetch lan & long based upon city selected
  const {
    latLongData,
    isLatLongSuccess,
    fetchLatLongHandler,
    fetchLatAndLong,
    setCity,
    city,
  } = useFetchLatAndLong()

  //Hook to fetch forecast weather data
  const { fetchDaily, data: forcastData } = useFetchDaily()

  //Fetching weather data whenever lat & long changes
  useEffect(() => {
    // @ts-ignore TODO: setup query in string not obj
    fetchWeatherData({ lat, long })
    // @ts-ignore TODO: setup query in string not obj
    fetchDaily({ lat, long })
  }, [lat, long])

  //After fetching lat long by city
  useEffect(() => {
    if (isLatLongSuccess) {
      setLat(latLongData?.coord.lat as SetStateAction<number>)
      setLong(latLongData?.coord.lon as SetStateAction<number>)
    }
  }, [isLatLongSuccess, latLongData])

  //Fetching weather data first time when page loads
  useEffect(() => {
    // @ts-ignore TODO: setup query in string not obj
    fetchWeatherData({ lat, long })
    // @ts-ignore TODO: setup query in string not obj
    fetchDaily({ lat, long })
  }, [])

  return {
    data,
    isSuccess,
    isLoading,
    isFetching,
    error,
    forcastData,
    city,
    setCity,
    fetchLatLongHandler,
    fetchLatAndLong,
  }
}

export default useFetchWeather
