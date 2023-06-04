import Social from '@components/Common/Social'
import logo from '@public/logo.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { Menu, Nav } from './Header.styled'

const menuLists = ['home', 'projects', 'about', 'experience', 'contact']

const RowHeader = styled(Row)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 0.5em 2em;
  background-color: ${props => props.theme.colors.white};
`

const Header = () => {
  return (
    <RowHeader
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
    </RowHeader>
  )
}

export default Header
