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
		font-size: 1.6rem;
		font-family: 'Lato', sans-serif;
	}

	p {
		line-height: normal;
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
  align-items: center;
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};
`

export const Col = styled.div`
  border: 1px solid green;
  flex-basis: ${props => props.flexBasis};
`

// Shared Design
export const Highlight = styled.span`
  color: ${props => props.theme.colors.accent};
`

export const BulletPoint = styled.span`
  background-color: ${props => props.theme.colors.accent};
  border-radius: 100%;
  width: 0.5em;
  height: 0.5em;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`

export default GlobalStyle
