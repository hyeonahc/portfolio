import styled from 'styled-components'

export const ImageWrapper = styled.div`
  position: relative;
`

export const Square = styled.div`
  border: 8px solid ${props => props.theme.colors.accent};
  width: 340px;
  height: 315px;
  position: absolute;
  top: 3em;
  left: 3em;
  z-index: -1;
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: normal;
  position: relative;
  margin-bottom: 0.3em;
`

export const Paragraph = styled.p`
  margin-bottom: 2em;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

export const TagBox = styled.div`
  flex-basis: 15em;
  svg {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.accent};
    vertical-align: baseline;
  }
`

export const Tag = styled.span`
  font-weight: ${props => props.theme.fontWeight.light};
  margin-left: 0.5em;
`
