import styled from 'styled-components'

export const Row = styled.div`
  height: 100vh;
  padding: 80px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: auto;
    padding: calc(80px + 100px) 0 100px 0;
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
  margin-bottom: 10px;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xmd};
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: -5px;
  }
`

export const Hyeonah = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxxxl};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  line-height: unset;
  letter-spacing: 2px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xxxxl};
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xxxxxl};
  }
`

export const Paragraph = styled.p`
  max-width: 550px;
  margin: 20px 0 30px 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
    margin: 10px 0 30px 0;
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
  width: 7px;
  height: 100px;
  position: absolute;
  top: 80px;
  left: -32px;
`

export const Circle = styled.div`
  border: 5px solid ${props => props.theme.colors.primary};
  border-radius: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -32px;
  right: -40px;
`

export const Square = styled.div`
  border: 7px solid ${props => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 96px;
  right: -80px;
`
