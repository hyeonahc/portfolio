import {
  faBehance,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { MobileCopy, SocialWrapper } from './Social.styled'

const Social = () => {
  return (
    <>
      <MobileCopy>Follow Me!</MobileCopy>
      <SocialWrapper>
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
      </SocialWrapper>
    </>
  )
}

export default Social
