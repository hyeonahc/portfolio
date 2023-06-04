import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
		font-size: 62.5%;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	body {
		font-family: 'Lato', sans-serif;
		font-size: 1.7rem;
	}

	p, ul, li {
		line-height: normal;
		font-weight: ${props => props.theme.fontWeight.light};
	}

	a {
		color: inherit;
		text-decoration: none;
		font-family: 'Poppins', sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3 {
		font-family: 'Poppins', sans-serif;
	}

	img {
    vertical-align: bottom;
  }
`

// Layout
export const Row = styled.div`
  border: 1px solid salmon;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};
`

export const Col = styled.div`
  border: 1px solid green;
  flex-basis: ${props => props.flexBasis};
  order: ${props => props.order};
`

// Shared Design
export const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
`

export const BulletPoint = styled.span`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
`

export default GlobalStyle
