import {
  faBehance,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '@public/logo.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Nav, Social } from './Header.styled'

const Header = () => {
  return (
    <Row
      height='10vh'
      padding='0.5em 0'
      justifyContent='space-between'>
      <Col>
        <Link href='/'>
          <Image
            src={logo}
            width={60}
            height={60}
            alt='logo'
            priority={true}
          />
        </Link>
      </Col>
      <Col>
        <Nav>
          <Menu>
            <BulletPoint
              top='-0.5em'
              left='-0.75em'
            />
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
      </Col>
    </Row>
  )
}

export default Header
