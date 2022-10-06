import { Main, Weather } from '@/Components/DailyForcastCard'
import { Wind } from '@/Components/TodayForcastCard'
import { Config } from '@/Config'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<FutureData, string>({
    //@ts-ignore TODO: query should be in string not in object form
    query: data =>
      `/forecast?lat=${data?.lat}&lon=${data?.long}&exclude=hourly,minutely&units=metric&appid=${Config.OPENWEATHER}`,
  })

export type cloud = {
  all: number
}

export type Sys = {
  pod: string
}

export type List = {
  dt: number
  main: Main
  weather: Array<Weather>
  clouds: cloud
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
}

export type City = {
  coord: { lat: number; lon: number }
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

export type FutureData = {
  cod: string
  message: string
  cnt: number
  list: Array<List>
  city: City
}
