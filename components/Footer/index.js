import Social from '@components/Common/Social'
import { Row } from '@styles/globals'
import Link from 'next/link'
import { Author, Copyright } from './Footer.styled'

const Footer = () => {
  return (
    <Row
      padding='2em 0'
      flexDirection='column'>
      <Author>
        Designed & Built by{' '}
        <Link
          href='https://github.com/hyeonahc'
          target='_blank'>
          hyeonahc
        </Link>
      </Author>
      <Copyright>© 2023 All Rights Reserved</Copyright>
      <Social />
    </Row>
  )
}

export default Footer
