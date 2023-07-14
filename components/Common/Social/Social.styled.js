import styled from 'styled-components'

export const SocialWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
  a {
    font-size: ${props => props.theme.fontSizes.lg};
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: ${props => props.theme.fontSizes.xl};
    }
  }
`

export const MobileCopy = styled.p`
  display: none;
  font-family: 'Annie Use Your Telescope', cursive;
  font-size: ${props => props.theme.fontSizes.xl};
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`
