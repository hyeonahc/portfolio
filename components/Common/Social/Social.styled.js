import styled from 'styled-components'

export const SocialWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
  a {
    font-size: ${props => props.theme.fontSizes.lg};
    padding: 0.25em;
  }
`

export const MobileCopy = styled.p`
  display: none;
  font-family: 'Annie Use Your Telescope', cursive;
  font-size: ${props => props.theme.fontSizes.xl};
  text-align: center;
  margin-bottom: 0.25em;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`
