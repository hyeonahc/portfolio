import { Row } from '@styles/globals'
import styled from 'styled-components'

export const RowHeader = styled(Row)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
`

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
