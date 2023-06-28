import styled from 'styled-components'

export const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxxl};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  line-height: unset;
  letter-spacing: 2px;
`

export const Paragraph = styled.p`
  width: 20em;
  text-align: center;
`
