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

  const onDeleteCity = useCallback(() => {
    if (city && country) {
      dispatch(removeCity({ country, city }))
    }
  }, [country, city])

  const transformData = (data: SavedList) => {
    //@ts-ignore TODO: Will fix this once data is consistent
    return Object.keys(data)?.map(country => ({
      title: country,
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
