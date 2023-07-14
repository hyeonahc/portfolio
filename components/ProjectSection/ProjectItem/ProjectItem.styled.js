import styled from 'styled-components'

export const Row = styled.div`
  padding: 0 0 150px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 40px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 0 100px 0;
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
  margin-bottom: 10px;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 0;
  }
`

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  text-transform: capitalize;
  margin-bottom: 10px;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xxl};
    margin-bottom: 0;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 7px;
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
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`

export const Description = styled.p`
  max-width: 550px;
  margin: 25px 0;
`
