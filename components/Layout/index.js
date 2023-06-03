import Footer from '@components/Footer'
import Header from '@components/Header'
import { Container } from './Layout.styled'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
