import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  height: 5.5em;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  }
`

export const Col = styled.div``

export const HamburgerNavWrapper = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`

export const Navigation = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  gap: 1.6em;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    visibility: hidden;
    position: absolute;
    top: 5.5em;
    right: 0;
    width: 50%;
    height: 100vh;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    &.hamburgerOpen {
      display: block;
      visibility: visible;
      transform: translate(0, 0);
    }
  }
`

export const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;
  a {
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeight.semibold};
    cursor: pointer;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    margin-bottom: 1em;
    gap: 0;
    a {
      border-bottom: 1px solid ${props => props.theme.colors.grey};
      width: 100%;
      padding: 1.6em 0;
      text-align: center;
    }
  }
`
