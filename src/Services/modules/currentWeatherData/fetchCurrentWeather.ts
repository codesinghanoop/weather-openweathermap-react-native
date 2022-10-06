import { Main, Weather } from '@/Components/DailyForcastCard'
import { Wind } from '@/Components/TodayForcastCard'
import { Config } from '@/Config'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { cloud, Sys } from '../fetchFutureWeatherData/fetchFutureData'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<CurrentData, string>({
    //@ts-ignore TODO: query should be in string not in object form
    query: data =>
      `/weather?lat=${data?.lat}&lon=${data?.long}&exclude=hourly,minutely&units=metric&appid=${Config.OPENWEATHER}`,
  })

export type CurrentData = {
  coord: { lat: number; lon: number }
  weather: Array<Weather>
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: cloud
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
