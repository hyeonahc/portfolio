import styled, { keyframes } from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Col = styled.div`
  flex-basis: 80%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-basis: auto;
    max-width: 550px;
  }
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: right;
  text-transform: uppercase;
  line-height: normal;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
    margin-bottom: 1em;
  }
`

export const ExperienceWrapper = styled.div`
  display: flex;
  height: 28em;
  gap: 2em;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: auto;
    flex-direction: column;
  }
`

export const Tabs = styled.ul`
  flex-basis: 20%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${props => props.theme.colors.lightGrey};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(#000cfb, #4777fc, #81b0f7);
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-basis: auto;
    display: flex;
    overflow-y: visible;
    overflow-x: scroll;
    height: 100px;
    &::-webkit-scrollbar {
      height: 8px;
      width: auto;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(90deg, #000cfb, #4777fc, #81b0f7);
    }
  }
`

export const Line = styled.div`
  background-color: ${props => props.theme.colors.grey};
  transition: background-color 0.3s ease-in;
  height: 50px;
  width: 2px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 2px;
    width: 50px;
  }
`

export const Indicator = styled.span`
  align-items: center;
  background-color: ${props => props.theme.colors.grey};
  border: calc(16px / 3.5) solid ${props => props.theme.colors.white};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 16px;
  transition: background-color 0.3s ease-in;
  width: 16px;
`

export const TabButton = styled.div`
  cursor: pointer;
  align-items: center;
  color: ${props => props.theme.colors.grey};
  display: flex;
  font-size: 14px;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  transition: color 0.2s ease-in;
  width: 80px;
  &:hover {
    color: ${props => props.theme.colors.primary};
    ${Indicator} {
      background-color: ${props => props.theme.colors.primary};
    }
  }
  &:focus-visible {
    border-radius: 4px;
    outline: ${props => props.theme.colors.primary} solid 2px;
  }
  &:focus {
    border-radius: 4px;
    outline: ${props => props.theme.colors.primary} solid 2px;
  }
`

export const IconCompleted = styled.svg`
  fill: transparent;
`

const fillColorChange = keyframes`
  0% {
    fill: ${props => props.theme.colors.primary};
  }
  100% {
    fill: ${props => props.theme.colors.white};
  }
`

export const Label = styled.span`
  font-weight: ${props => props.theme.fontWeight.semibold};
  margin-top: 4px;
`

export const Tab = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-child) {
    width: 100%;
  }
  &:not(.current).navigable ${Indicator} {
    background-color: ${props => props.theme.colors.primary};
    transition: all 0.3s ease-in;
  }
  &:not(.current).navigable .StepButton:hover ${Indicator} {
    background-color: ${props => props.theme.colors.primary};
    transition: all 0.3s ease-in;
  }
  &.current {
    ${Label} {
      color: ${props => props.theme.colors.primary};
    }
    ${Indicator} {
      background-color: ${props => props.theme.colors.white};
      border: calc(16px / 4) solid ${props => props.theme.colors.primary};
      transition: all 0.3s ease-in;
    }
  }
  &.completed {
    ${Label} {
      color: ${props => props.theme.colors.primary};
    }
    ${Indicator} {
      border: 0;
      transition: all 0.3s ease-in;
    }
    ${IconCompleted} {
      animation: ${fillColorChange} 0.2s ease-in 0.3s forwards;
      fill: ${props => props.theme.colors.white};
    }
  }
  &.navigable {
    ${Line} {
      background-color: ${props => props.theme.colors.primary};
      transition: background-color 0.2s ease-in;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export const Content = styled.div`
  padding-top: 20px;
  flex-basis: 80%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-basis: auto;
  }
`

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

export const ExperienceList = styled.li`
  margin-bottom: 5px;
  svg {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.primary};
    vertical-align: baseline;
    margin-right: 1em;
  }
`
