import styled from 'styled-components'

export const Date = styled.p`
  font-weight: ${props => props.theme.fontWeight.light};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5em;
  position: relative;
`

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  text-transform: capitalize;
  margin-bottom: 0.5em;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25em;
  margin-bottom: 1.5em;
`

export const TagBox = styled.div`
  svg {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.primary};
  }
`

export const Tag = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeight.light};
  color: ${props => props.theme.colors.primary};
`

export const Description = styled.p`
  max-width: 550px;
  margin-bottom: 1.5em;
`
