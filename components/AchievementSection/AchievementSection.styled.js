import styled from 'styled-components'

export const Row = styled.div`
  padding: 150px 0;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px 0;
    flex-direction: column;
    gap: 30px;
  }
`

export const Col = styled.div`
  flex-basis: 33.333%;
`

export const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Emoji = styled.p`
  font-size: ${props => props.theme.fontSizes.xxxl};
`

export const Number = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.black};
  text-align: center;
`

export const Description = styled.p`
  text-align: center;
`
