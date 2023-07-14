import styled from 'styled-components'

export const Row = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Author = styled.p`
  margin-bottom: 7px;
  a {
    font-family: ${props => props.theme.fontFamily.Inter};
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`

export const Copyright = styled.p`
  margin-bottom: 25px;
  font-size: ${props => props.theme.fontSizes.sm};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`
