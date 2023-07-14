import styled from 'styled-components'

export const Row = styled.div`
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px 0;
  }
`

export const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxxxl};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  line-height: unset;
  letter-spacing: 2px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xxxxl};
  }
`

export const Paragraph = styled.p`
  width: 300px;
  text-align: center;
`
