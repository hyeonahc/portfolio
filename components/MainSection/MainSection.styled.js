import styled from 'styled-components'

export const Row = styled.div`
  height: 100vh;
  padding: 5.5em 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: auto;
    padding: calc(5.5em + 100px) 0 100px 0;
  }
`

export const Col = styled.div`
  flex-basis: ${props => props.flexBasis};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-basis: auto;
    order: ${props => props.mdOrder};
  }
`

export const ProfileCopy = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    align-items: center;
  }
`

export const Hello = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  line-height: unset;
  letter-spacing: 1px;
  margin-bottom: 1em;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xmd};
    margin-bottom: 0.5em;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`

export const Hyeonah = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxxl};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  line-height: unset;
  letter-spacing: 2px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xxxxl};
  }
`

export const Paragraph = styled.p`
  max-width: 550px;
  margin: 2em 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 1.5em 0;
    text-align: center;
  }
`

export const ProfilePhoto = styled.div`
  height: 50vh;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 35vh;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: auto;
    width: 70vw;
  }
`

export const Shapes = styled.div`
  position: absolute;
`

export const Rectangle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 0.5em;
  height: 6em;
  position: absolute;
  top: 5em;
  left: -2em;
`

export const Circle = styled.div`
  border-radius: 100%;
  width: 1.25em;
  height: 1.25em;
  position: absolute;
  top: -2em;
  right: -2.5em;
`

export const Square = styled.div`
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  bottom: 6em;
  right: -5em;
`
