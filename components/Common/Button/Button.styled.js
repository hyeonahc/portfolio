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
  border: 3px solid ${props => props.theme.colors.accent};
  background-color: ${props =>
    props.primary ? 'transparent' : props.theme.colors.accent};
  color: ${props =>
    props.primary ? props.theme.colors.accent : props.theme.colors.white};
`
