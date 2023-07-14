import styled from 'styled-components'

export const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  cursor: pointer;
`

export const Burger = styled.div`
  width: 30px;
  height: 3.5px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.black};
  transform-origin: 1px;
  transition: all 0.3s linear;
  &.burger1 {
    transform: ${props => (props.$isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &.burger2 {
    transform: ${props =>
      props.$isOpen ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${props => (props.$isOpen ? 0 : 1)};
  }
  &.burger3 {
    transform: ${props => (props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`
