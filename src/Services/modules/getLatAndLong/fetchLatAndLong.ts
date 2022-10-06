import { Config } from '@/Config'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { CurrentData } from '../currentWeatherData/fetchCurrentWeather'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<CurrentData, string>({
    query: city => `/weather?q=${city}&APPID=${Config.OPENWEATHER}`,
  })
