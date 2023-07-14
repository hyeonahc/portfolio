import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const StyledButton = styled.button`
  padding: 10px 25px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeight.semibold};
  border: 3px solid ${props => props.theme.colors.primary};
  background-color: ${props =>
    props.primary ? 'transparent' : props.theme.colors.primary};
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.white};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`
