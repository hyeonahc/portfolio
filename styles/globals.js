import { createGlobalStyle } from 'styled-components'

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
`

export default GlobalStyle
