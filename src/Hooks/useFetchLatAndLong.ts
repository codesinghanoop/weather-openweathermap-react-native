import { useLazyFetchLatAndLongQuery } from '@/Services/modules/getLatAndLong'
import { useState } from 'react'

const useFetchLatAndLong = () => {
  const [city, setCity] = useState('')
  const [
    fetchLatAndLong,
    {
      data: latLongData,
      isSuccess: isLatLongSuccess,
      isLoading: isLatLongLoading,
      error: latLongError,
    },
  ] = useLazyFetchLatAndLongQuery()

  const fetchLatLongHandler = () => {
    fetchLatAndLong(city)
  }

  return {
    latLongData,
    isLatLongSuccess,
    isLatLongLoading,
    latLongError,
    fetchLatLongHandler,
    fetchLatAndLong,
    setCity,
    city,
  }
}

export default useFetchLatAndLong
