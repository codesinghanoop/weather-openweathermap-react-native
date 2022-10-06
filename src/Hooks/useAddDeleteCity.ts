import { addCity, removeCity } from '@/Store/Search'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export type SavedItem = {
  city: Array<string>
}

export type SavedList = {
  cities: SavedItem
}

const useAddDeleteCity = () => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()
  const allPlaceData = useSelector(
    (state: { search: SavedList }) => state.search.cities,
  )

  const onAddPress = useCallback(() => {
    if (city && country) {
      dispatch(addCity({ country, city }))
    }
  }, [country, city])

  const onDeleteCity = useCallback((city: string, country: string) => {
    if (city && country) {
      dispatch(removeCity({ country, city }))
    }
  }, [])

  const transformData = (data: SavedList) => {
    return Object.keys(data)?.map(country => ({
      title: country,
      //@ts-ignore TODO: Will fix this once data is consistent
      data: data?.[country],
    }))
  }
  

  return {
    city,
    country,
    allPlaceData: transformData(allPlaceData as any),
    setCity,
    setCountry,
    onAddPress,
    onDeleteCity,
  }
}

export default useAddDeleteCity
