import Social from '@components/Common/Social'
import Link from 'next/link'
import { Author, Copyright, Row } from './Footer.styled'

const Footer = () => {
  return (
    <Row>
      <Author>
        Designed & Built by{' '}
        <Link href='https://github.com/hyeonahc' target='_blank'>
          hyeonahc
        </Link>
      </Author>
      <Copyright>© 2024 All Rights Reserved</Copyright>
      <Social />
    </Row>
  )
}

export default Footer
