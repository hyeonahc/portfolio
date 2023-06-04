import Social from '@components/Common/Social'
import logo from '@public/logo.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import { useRef } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { Menu, Nav } from './Header.styled'

const menuLists = [
  {
    name: 'home',
    value: '-15px',
  },
  {
    name: 'projects',
    value: '55px',
  },
  {
    name: 'about',
    value: '160px',
  },
  {
    name: 'experience',
    value: '240px',
  },
  {
    name: 'contact',
    value: '355px',
  },
]

const RowHeader = styled(Row)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.white};
`

const Header = () => {
  const bulletPointRef = useRef(null)

  const clickMenu = value => {
    console.log(bulletPointRef.current)
    bulletPointRef.current.style.left = value
  }

  return (
    <RowHeader
      id='home'
      width='100%'
      height='5.5em'
      padding='0 2em'
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
              ref={bulletPointRef}
              top='-10px'
              left='-15px'
            />
            {menuLists.map((menuList, index) => (
              <Link
                key={index}
                to={menuList.name}
                smooth={true}
                onClick={() => clickMenu(menuList.value)}>
                {menuList.name}
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
