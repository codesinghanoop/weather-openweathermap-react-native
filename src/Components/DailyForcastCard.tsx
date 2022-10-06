import React from 'react'
import styled from 'styled-components/native'
import moment from 'moment'

export type Weather = {
  icon?: string
  description?: string
}

export type Main = {
  temp_max: number
  feels_like: number
  temp: number
  temp_min: number
  humidity: number
}

export type Day = {
  dt: number
  weather: Array<Weather>
  main: Main
}

export interface CurrentDay {
  day: Day
}

const DailyForcastCard = ({ day }: CurrentDay) => {
  return (
    <DayContainer>
      <DateContainer>
        <WeekDay>{moment(day.dt * 1000).format('ddd')}</WeekDay>
        <WeekDay>{`(${moment(day.dt * 1000).format('HH:mm')})`}</WeekDay>
      </DateContainer>
      <IconTempView>
        <WeatherIcon
          source={{
            uri: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
          resizeMode={'contain'} // cover or contain its upto you view look
        />
        <Description>{day.weather[0].description}</Description>
      </IconTempView>
      <DegreeView>
        <Degree>{Math.round(day.main.temp_max)}°C</Degree>
        <FeelsLike>Feels {Math.round(day.main.feels_like)}°C</FeelsLike>
      </DegreeView>
    </DayContainer>
  )
}

const DayContainer = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 478px;
`

const DateContainer = styled.View`
  text-align: right;
  flex: 1;
`

const WeekDay = styled.Text`
  font-size: 24px;
  text-align: center;
  margin: 3px;
`

const IconTempView = styled.View`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  flex: 2;
`

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`

const DegreeView = styled.View`
  text-align: center;
  flex: 1;
`

const Degree = styled.Text`
  font-size: 24px;
`

const FeelsLike = styled.Text`
  font-size: 14px;
`

const Description = styled.Text`
  font-size: 14px;
`

export default DailyForcastCard
