import Social from '@components/Common/Social'
import logo from '@public/logo.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { Menu, Nav } from './Header.styled'

const menuLists = ['home', 'projects', 'about', 'experience', 'contact']

const Header = () => {
  return (
    <Row
      id='home'
      height='10vh'
      padding='0.5em 0'
      justifyContent='space-between'>
      <Col>
        <Link
          to='home'
          smooth={true}>
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
            {menuLists.map((menuList, index) => (
              <Link
                key={index}
                to={menuList}
                smooth={true}>
                {menuList}
              </Link>
            ))}
          </Menu>
          <Social />
        </Nav>
      </Col>
    </Row>
  )
}

export default Header
