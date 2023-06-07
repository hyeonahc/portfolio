import styled from 'styled-components'

export const ProfileCopy = styled.div`
  display: flex;
  flex-direction: column;
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
`

export const Hyeonah = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxl};
  font-weight: ${props => props.theme.fontWeight.black};
  text-transform: uppercase;
  line-height: unset;
  letter-spacing: 2px;
`

export const Paragraph = styled.p`
  max-width: 550px;
  margin: 2em 0;
`

export const ProfilePhoto = styled.div`
  height: 50vh;
  position: relative;
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
  /* border: 4px solid ${props => props.theme.colors.primary}; */
  border-radius: 100%;
  width: 1.25em;
  height: 1.25em;
  position: absolute;
  top: -2em;
  right: -2.5em;
`

export const Square = styled.div`
  /* border: 8px solid ${props => props.theme.colors.primary}; */
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  bottom: 6em;
  right: -5em;
`
