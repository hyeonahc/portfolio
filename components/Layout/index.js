import Header from '@components/Header'
import { Container } from './Layout.styled'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
