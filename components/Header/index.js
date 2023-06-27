import Social from '@components/Common/Social'
import logo from '@public/logo.png'
import { BulletPoint, Col } from '@styles/globals'
import Image from 'next/image'
// import { useRef } from 'react'
import { Link as Scroll } from 'react-scroll'
import { Menu, Nav, RowHeader } from './Header.styled'

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

const Header = () => {
  // const bulletPointRef = useRef(null)

  // const clickMenu = value => {
  //   bulletPointRef.current.style.left = value
  // }

  return (
    <RowHeader
      width='100%'
      height='5.5em'
      padding='0 2em'
      justifyContent='space-between'>
      <Col>
        <Scroll
          to='home'
          smooth={true}>
          <Image
            src={logo}
            width={60}
            height={60}
            alt='logo'
            priority={true}
            style={{ cursor: 'pointer' }}
          />
        </Scroll>
      </Col>
      <Col>
        <Nav>
          <Menu>
            <BulletPoint
              // ref={bulletPointRef}
              top='-10px'
              left='-15px'
            />
            {menuLists.map((menuList, index) => (
              <Scroll
                key={index}
                to={menuList.name}
                smooth={true}
                offset={-100}
                // onClick={() => clickMenu(menuList.value)}
              >
                {menuList.name}
              </Scroll>
            ))}
          </Menu>
          <Social />
        </Nav>
      </Col>
    </RowHeader>
  )
}

export default Header
