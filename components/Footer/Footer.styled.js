import styled from 'styled-components'

export const Author = styled.p`
  margin-bottom: 0.3em;
  a {
    font-family: ${props => props.theme.fontFamily.Inter};
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`

export const Copyright = styled.p`
  margin-bottom: 1em;
  font-size: ${props => props.theme.fontSizes.sm};
`
