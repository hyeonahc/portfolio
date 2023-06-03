import styled from 'styled-components'

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1em;
  a {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`
