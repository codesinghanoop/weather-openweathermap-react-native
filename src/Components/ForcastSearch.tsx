import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components/native'

export type Forecast = {
  city: string
  setCity: Dispatch<SetStateAction<string>>
  fetchLatLongHandler: () => void
  setModal: () => void
}

const ForecastSearch = ({
  city,
  setCity,
  fetchLatLongHandler,
  setModal,
}: Forecast) => {
  return (
    <Container>
      <SearchBy>
        <ButtonLabel>Search By City</ButtonLabel>
        <ButtonLabel onPress={setModal}>Add City</ButtonLabel>
      </SearchBy>
      <SearchCity
        onChangeText={setCity}
        value={city}
        placeholder={'Search By City'}
        onSubmitEditing={fetchLatLongHandler}
        autoCorrect={false}
      />
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`

const SearchBy = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  margin-top: 10px;
  align-items: center;
  width: 95%;
  max-width: 700px;
`

const ButtonLabel = styled.Text`
  color: white;
  margin-right: 10px;
`

const SearchCity = styled.TextInput`
  height: 50px;
  margin: 12px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 95%;
  color: black;
  max-width: 700px;
`

export default ForecastSearch
