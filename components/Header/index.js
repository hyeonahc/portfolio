import Social from '@components/Common/Social'
import logo from '@public/logo.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Nav } from './Header.styled'

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
              top='-10px'
              left='-15px'
            />
            <Link href='/'>home</Link>
            <Link href='#projects'>projects</Link>
            <Link href='#about'>about</Link>
            <Link href='#experience'>experience</Link>
            <Link href='#skills'>skills</Link>
            <Link href='#contact'>contact</Link>
          </Menu>
          <Social />
        </Nav>
      </Col>
    </Row>
  )
}

export default Header
