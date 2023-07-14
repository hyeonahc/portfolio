import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => props.theme.breakpoints.xxl};
  margin: 0 auto;
  position: relative;
  padding: 0 0 0;
  @media (max-width: ${props => props.theme.breakpoints.xxxl}) {
    width: auto;
    margin: 0;
    padding: 0 100px 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    padding: 0 50px 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: fit-content;
    padding: 0 30px;
  }
`

export const ScrollToTop = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 30px;
  bottom: 30px;
`

export const Background = styled.div`
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.white};
  }
`
