import styled from 'styled-components'

export const Row = styled.div`
  padding: 0 0 150px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3em;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  order: ${props => props.order};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-basis: auto;
    order: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

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
