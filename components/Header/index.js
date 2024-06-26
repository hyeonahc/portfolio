import Social from '@components/Common/Social'
import logo from '@public/logo.png'
import Image from 'next/image'
// import { useRef } from 'react'
import { useState } from 'react'
import { Link as Scroll } from 'react-scroll'
import HamburgerNav from './HamburgerNav'
import {
  Col,
  HamburgerNavWrapper,
  Menu,
  Navigation,
  Row,
} from './Header.styled'

const menuLists = [
  {
    name: 'home',
    displayName: 'home',
    value: '-15px',
  },
  {
    name: 'projects',
    displayName: 'projects',
    value: '55px',
  },
  {
    name: 'about',
    displayName: 'about',
    value: '160px',
  },
  {
    name: 'myjourney',
    displayName: 'my journey',
    value: '240px',
  },
  {
    name: 'contact',
    displayName: 'contact',
    value: '355px',
  },
]

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  // const bulletPointRef = useRef(null)

  // const clickMenu = value => {
  //   bulletPointRef.current.style.left = value
  // }

  const closeHamburger = hamburgerOpen => {
    if (hamburgerOpen) {
      setHamburgerOpen(false)
    }
  }

  return (
    <Row>
      <Col>
        <Scroll to='home' smooth={true}>
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
        <HamburgerNavWrapper onClick={toggleHamburger}>
          <HamburgerNav isOpen={hamburgerOpen} />
        </HamburgerNavWrapper>
        <Navigation className={hamburgerOpen && 'hamburgerOpen'}>
          <Menu>
            {/* <BulletPoint
              // ref={bulletPointRef}
              top='-10px'
              left='-15px'
            /> */}
            {menuLists.map((menuList, index) => (
              <Scroll
                key={index}
                to={menuList.name}
                smooth={true}
                offset={-100}
                // onClick={() => clickMenu(menuList.value)}
                onClick={() => closeHamburger(hamburgerOpen)}
              >
                {menuList.displayName}
              </Scroll>
            ))}
          </Menu>
          <Social />
        </Navigation>
      </Col>
    </Row>
  )
}

export default Header
