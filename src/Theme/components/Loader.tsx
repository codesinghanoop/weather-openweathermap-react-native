import React from 'react'
import { useTheme } from '@/Hooks'
import styled from 'styled-components/native'

type RNIActivityIndicatorProps = React.ComponentProps<any>

const Loader = (props: RNIActivityIndicatorProps) => {
  const { Colors, Gutters } = useTheme()
  const { color = Colors.primary, ...rest } = props
  return <Indicator size={'large'} style={[Gutters.largeVMargin]} />
}

const Indicator = styled.ActivityIndicator``

export default Loader
