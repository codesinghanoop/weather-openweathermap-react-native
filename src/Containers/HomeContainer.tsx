import React, { useCallback, useRef } from 'react'
import DailyForcastCard, { Day } from '@/Components/DailyForcastCard'
import useFetchWeather from '@/Hooks/useFetchWeather'
import Loader from '@/Theme/components/Loader'
import TodayForecast from '@/Components/TodayForcastCard'
import styled from 'styled-components/native'
import ForecastSearch from '@/Components/ForcastSearch'
import BaseModal, { BaseModalRef } from '@/Theme/components/Modal'
import useAddDeleteCity from '@/Hooks/useAddDeleteCity'
import AddCityForm from '@/Components/AddCityForm'
import { CurrentData } from '@/Services/modules/currentWeatherData/fetchCurrentWeather'

const HomeContainer = () => {
  const {
    data,
    isSuccess,
    isLoading,
    forcastData,
    city,
    setCity,
    fetchLatLongHandler,
    fetchLatAndLong,
  } = useFetchWeather()
  const modalRef = useRef<BaseModalRef>(null)
  const { allPlaceData } = useAddDeleteCity()

  const showModal = useCallback(() => {
    modalRef?.current?.show()
  }, [])

  const onSavedItemPress = (item: string) => {
    modalRef?.current?.hide()
    setCity(item)
    fetchLatAndLong(item)
  }

  if (isLoading || !isSuccess) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <Container>
      <ForecastSearch
        city={city}
        setCity={setCity}
        fetchLatLongHandler={fetchLatLongHandler}
        setModal={showModal}
      />
      <TodayForecast currentWeather={data as CurrentData} />
      <ContainerScrollview
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
      >
        <FutureForecastContainer>
          {forcastData?.list ? (
            forcastData?.list.map((day: Day, index: number) => {
              if (index !== 0) {
                return <DailyForcastCard key={day.dt} day={day} />
              }
            })
          ) : (
            <NoWeather>No Weather to show</NoWeather>
          )}
        </FutureForecastContainer>
      </ContainerScrollview>
      <BaseModal
        ref={modalRef}
        //@ts-ignore
        animationType="slide"
        presentationStyle={'pageSheet'}
        transparent={false}
      >
        <AddCityForm />
        <ListHeading>Places Saved</ListHeading>
        <ListContainer>
          <List
            sections={allPlaceData}
            keyExtractor={(item: string, index: number) => item + index}
            renderItem={({ item }: { item: string }) => (
              <ListDataText onPress={() => onSavedItemPress(item)}>
                {item}
              </ListDataText>
            )}
            renderSectionHeader={({
              section: { title },
            }: {
              section: { title: string }
            }) => <ListSectionHeading>{title}</ListSectionHeading>}
          />
        </ListContainer>
      </BaseModal>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContainerScrollview = styled.ScrollView`
  flex: 1;
`

const ListHeading = styled.Text`
  font-weight: bold;
  font-size: 14px;
`

const ListSectionHeading = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: dodgerblue;
`

const ListDataText = styled.Text`
  font-size: 12px;
  color: black;
`

const List = styled.SectionList`
  flex: 1;
  flex-grow: 1;
`

const ListContainer = styled.View`
  flex: 1;
`

export default HomeContainer
