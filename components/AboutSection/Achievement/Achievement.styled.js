import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 10em;
  width: 17em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`

export const Emoji = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
`

export const Number = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.black};
`

export const Description = styled.p`
  text-align: center;
`
