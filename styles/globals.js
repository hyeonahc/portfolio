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
		font-family: 'Inter', sans-serif;
		font-size: 1.6rem;
		color: ${props => props.theme.colors.black};
	}

	p, ul, li {
		line-height: 1.4;
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
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    right: ${props => props.mdRight};
  }
`

export default GlobalStyle
