import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid darkgoldenrod;
  width: ${props => props.theme.breakpoints.xxxl};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.breakpoints.xxxl}) {
    width: auto;
    margin: 0;
    padding: 0 10em;
  }
  @media (max-width: ${props => props.theme.breakpoints.xxl}) {
    padding: 0 5em;
  }
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    padding: 0 2em;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
  }
`
