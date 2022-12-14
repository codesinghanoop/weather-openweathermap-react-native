import { CurrentData } from '@/Services/modules/currentWeatherData/fetchCurrentWeather'
import React from 'react'
import styled from 'styled-components/native'
import { Main, Weather } from './DailyForcastCard'

export type Wind = {
  speed: number
}

export type Daily = {
  rain: number
}

export type CurrentWeather = {
  timezone: number
  weather: Array<Weather>
  main: Main
  wind: Wind
  daily: Array<Daily>
}

export type TodayWeather = {
  currentWeather: CurrentData
}

const TodayForecast = ({ currentWeather }: TodayWeather) => {
  return (
    <CurrentView>
      <Timezone>{currentWeather.timezone}</Timezone>
      <MainInfoContainer>
        <CurrentTempView>
          {currentWeather.main && (
            <WeatherIcon
              source={{
                uri: `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
              }}
              resizeMode={'contain'}
            />
          )}
          <CurrentDegrees>
            {Math.round(currentWeather.main && currentWeather.main.temp)}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.main && currentWeather.weather[0].description}
        </Description>
      </MainInfoContainer>
      <SecondaryInfoContainer>
        <Row>
          <DetailsBox>
            <Label>Feels</Label>
            <Details>
              {currentWeather.main &&
                Math.round(currentWeather.main.feels_like)}
              °C
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Low</Label>
            <Details>
              {currentWeather.main && Math.round(currentWeather.main.temp_min)}
              °C
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>High</Label>
            <Details>
              {currentWeather.main && Math.round(currentWeather.main.temp_max)}
              °C
            </Details>
          </DetailsBox>
        </Row>
        <Row>
          <DetailsBox>
            <Label>Wind</Label>
            <Details>
              {currentWeather.wind && currentWeather.wind.speed} m/s
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Humidity</Label>
            <Details>
              {currentWeather.main && currentWeather.main.humidity}%
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Rain</Label>
            <Details>{'0'} MM</Details>
          </DetailsBox>
        </Row>
      </SecondaryInfoContainer>
    </CurrentView>
  )
}

const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`

const SecondaryInfoContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  width: 95%;
  max-width: 478px;
`

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`

const Timezone = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`

const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 60px;
`

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: black;
  padding: 10px 30px;
`

const DetailsBox = styled.View`
  display: flex;
`

const Label = styled.Text`
  font-size: 18px;
`

const Details = styled.Text`
  color: black;
  font-size: 15px;
  text-transform: capitalize;
`

export default TodayForecast
