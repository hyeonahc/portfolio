import styled from 'styled-components'

export const Row = styled.div`
  padding: 150px 0;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 3em;
  }
`

export const Col = styled.div`
  flex-basis: 33.333%;
`

export const Wrapper = styled.div`
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
  text-align: center;
`

export const Description = styled.p`
  text-align: center;
`
