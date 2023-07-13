import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid darkgoldenrod; */
  width: ${props => props.theme.breakpoints.xxl};
  margin: 0 auto;
  position: relative;
  padding: 0 0 0;
  @media (max-width: ${props => props.theme.breakpoints.xxxl}) {
    width: auto;
    margin: 0;
    padding: 0 5em 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    padding: 0 2em 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: fit-content;
    padding: 0 1em;
  }
`

export const ScrollToTop = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 2em;
  bottom: 1.5em;
`

export const Background = styled.div`
  border-radius: 100%;
  padding: 0.5em;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  svg {
    font-size: 1.5em;
    color: ${props => props.theme.colors.white};
  }
`
