import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1em;
`

export const StyledButton = styled.button`
  height: 3.25em;
  padding: 1rem 2.5rem;
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
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 3.1em;
    padding: 1rem 2.25rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`
