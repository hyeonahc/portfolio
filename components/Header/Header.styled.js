import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  gap: 1.6em;
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
`
