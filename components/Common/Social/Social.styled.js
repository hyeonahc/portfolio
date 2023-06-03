import styled from 'styled-components'

export const SocialWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  a {
    font-size: ${props => props.theme.fontSizes.lg};
    padding: 0.25em;
  }
`
