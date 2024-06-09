import styled from 'styled-components'

export const Row = styled.div`
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px 0;
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    gap: 30px;
  }
`

export const Col = styled.div`
  flex-basis: ${props => props.flexBasis};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-basis: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 550px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const Square = styled.div`
  border: 8px solid ${props => props.theme.colors.primary};
  width: 340px;
  height: 315px;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: -1;
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: normal;
  position: relative;
  margin-bottom: 30px;
`

export const Paragraph = styled.p`
  margin-bottom: 25px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`

export const TagBox = styled.div`
  flex-basis: 48%;
  svg {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.primary};
    vertical-align: baseline;
  }
`

export const Tag = styled.span`
  font-weight: ${props => props.theme.fontWeight.light};
  margin-left: 10px;
`
