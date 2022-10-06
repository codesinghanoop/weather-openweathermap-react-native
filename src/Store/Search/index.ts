import { SavedList } from '@/Hooks/useAddDeleteCity'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'search',
  initialState: { cities: {} } as SavedList,
  reducers: {
    addCity: (state, { payload: { city, country } }: SearchPayload) => {
      if (typeof city !== 'undefined' && typeof country !== 'undefined') {
        //@ts-ignore
        if (state.cities[country]) {
          //@ts-ignore
          state.cities[country] = [...state.cities[country], city]
        } else {
          state.cities = { ...state.cities, [country]: [city] }
        }
      }
    },
    removeCity: (
      state,
      { payload: { country, city } }: RemoveSearchPayload,
    ) => {
      if (typeof city !== 'undefined') {
        //@ts-ignore
        const arr = [...state.cities[country]].filter(c => c !== city)
        //@ts-ignore
        state.cities[country] = arr
      }
    },
  },
})

export const { addCity, removeCity } = slice.actions

export default slice.reducer

export type SearchState = {
  cities: any
}

type SearchPayload = {
  payload: SearchPayloadData
}

type RemoveSearchPayload = {
  payload: SearchRemovePayloadData
}

type SearchPayloadData = {
  city: string
  country: string
}

type SearchRemovePayloadData = {
  city: string
  country: string
}
