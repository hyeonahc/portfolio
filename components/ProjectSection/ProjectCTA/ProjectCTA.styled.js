import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const Title = styled.div`
  font-family: ${props => props.theme.fontFamily.poppins};
  text-align: center;
`

export const Title1 = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSizes.xxxxl};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`

export const Title2 = styled.p`
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSizes.xxl};
  letter-spacing: 2px;
  position: relative;
  color: white;
  text-shadow: -1px 1px 0 #000cfb, 1px 1px 0 #000cfb, 1px -1px 0 #000cfb,
    -1px -1px 0 #000cfb;
`
