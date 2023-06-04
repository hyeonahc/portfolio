import Footer from '@components/Footer'
import Header from '@components/Header'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animateScroll } from 'react-scroll'
import { Background, Container, ScrollToTop } from './Layout.styled'

const Layout = ({ children }) => {
  const clickScrollToTop = () => {
    animateScroll.scrollToTop()
  }

  return (
    <Container>
      <Header />
      {children}
      <Footer />
      <ScrollToTop onClick={clickScrollToTop}>
        <Background>
          <FontAwesomeIcon icon={faChevronUp} />
        </Background>
      </ScrollToTop>
    </Container>
  )
}

export default Layout
