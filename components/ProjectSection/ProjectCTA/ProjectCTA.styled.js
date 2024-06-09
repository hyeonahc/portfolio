import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.semibold};
  line-height: normal;
  text-align: center;
  position: relative;
`
