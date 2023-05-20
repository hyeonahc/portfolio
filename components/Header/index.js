import {
  faBehance,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '@public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Logo, Menu, Nav, Social } from './Header.styled'

const Header = () => {
  return (
    <>
      <Container>
        <Logo>
          <Link href='/'>
            <Image
              src={logo}
              width={60}
              height={60}
              alt='Picture of the author'
            />
          </Link>
        </Logo>
        <Nav>
          <Menu>
            <Link href='/'>home</Link>
            <Link href='#projects'>projects</Link>
            <Link href='#about'>about</Link>
            <Link href='#experience'>experience</Link>
            <Link href='#skills'>skills</Link>
            <Link href='#contact'>contact</Link>
          </Menu>
          <Social>
            <Link
              href='https://www.linkedin.com/in/hyeonahc'
              target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              href='https://github.com/hyeonahc'
              target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              href='https://www.behance.net/hyeonahc'
              target='_blank'>
              <FontAwesomeIcon icon={faBehance} />
            </Link>
          </Social>
        </Nav>
      </Container>
    </>
  )
}

export default Header
