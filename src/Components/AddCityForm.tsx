import useAddDeleteCity from '@/Hooks/useAddDeleteCity'
import React from 'react'
import styled from 'styled-components/native'

const AddCityForm = ({}) => {
  const { city, setCity, country, setCountry, onAddPress } = useAddDeleteCity()

  return (
    <Container>
      <Label>City</Label>
      <PlaceInput onChangeText={setCity} value={city} autoCorrect={false} />
      <Label>Country</Label>
      <PlaceInput
        onChangeText={setCountry}
        value={country}
        autoCorrect={false}
      />
      <Buttons onPress={onAddPress} title="Add" />
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`

const Buttons = styled.Button`
  color: black;
  background-color: gray;
`

const Label = styled.Text`
  color: black;
  margin-right: 10px;
`

const PlaceInput = styled.TextInput`
  height: 50px;
  margin: 12px;
  background-color: dodgerblue;
  padding: 15px;
  border-radius: 10px;
  width: 95%;
  color: black;
  max-width: 700px;
`

export default AddCityForm
