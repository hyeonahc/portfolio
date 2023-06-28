import { Burger, Hamburger } from './HamburgerNav'

const HamburgerNav = ({ isOpen }) => {
  return (
    <Hamburger>
      <Burger
        $isOpen={isOpen}
        className='burger1'
      />
      <Burger
        $isOpen={isOpen}
        className='burger2'
      />
      <Burger
        $isOpen={isOpen}
        className='burger3'
      />
    </Hamburger>
  )
}

export default HamburgerNav
