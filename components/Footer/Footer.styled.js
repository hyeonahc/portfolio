import styled from 'styled-components'

export const Row = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`
