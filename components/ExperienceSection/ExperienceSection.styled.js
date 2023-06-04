import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: right;
  text-transform: uppercase;
  line-height: normal;
  position: relative;
`

export const TabWrapper = styled.div`
  display: flex;
  height: 28em;
  gap: 2em;
`

export const Tabs = styled.ul`
  flex-basis: 30%;
  height: 100%;
  overflow: scroll;
`

export const Tab = styled.li`
  border-left: 3px solid ${props => props.theme.colors.grey};
  cursor: pointer;
  padding: 1em;
  &&.active {
    border-left: 3px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeight.semibold};
  }
`

export const Content = styled.div`
  flex-basis: 70%;
`

export const ContentItem = styled.div``

export const Position = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.semibold};
  margin-bottom: 0.25em;
`

export const OrganizationDurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`

export const Organization = styled.p`
  a {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeight.semibold};
  }
`

export const Duration = styled.p``

export const ExperienceUl = styled.ul``

export const ExperienceLi = styled.li`
  margin-bottom: 0.75em;
  svg {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.primary};
    vertical-align: baseline;
    margin-right: 1em;
  }
`
