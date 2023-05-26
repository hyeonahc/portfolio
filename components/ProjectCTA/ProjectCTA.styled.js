import styled from 'styled-components'

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: normal;
  text-align: center;
  position: relative;
`
