import Button from '@components/Button'
import profile from '@public/profile.png'
import { BulletPoint, Col, Highlight, Row } from '@styles/globals'
import Image from 'next/image'
import {
  Circle,
  Hello,
  Hyeonah,
  Paragraph,
  ProfileCopy,
  ProfilePhoto,
  Rectangle,
  Square,
} from './MainSection.styled'

const btnInfo = [
  {
    name: 'look projects',
    link: '/portfolio',
    newTab: false,
  },
  {
    name: 'download resume',
    link: '/',
    newTab: false,
  },
]

const MainSection = () => {
  return (
    <Row
      height='90vh'
      justifyContent='space-evenly'
      gap='5em'>
      <Col flexBasis='60%'>
        <ProfileCopy>
          <Hello>
            <BulletPoint
              top='-0.5em'
              left='-0.75em'
            />
            hello world!
          </Hello>
          <Hyeonah>
            I am <Highlight>Hyeonah</Highlight>
          </Hyeonah>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum blandit lorem in pulvinar. Ut ultricies justo non lacus
            sodales placerat in in velit. Nam euismod placerat laoreet.
            Pellentesque fringilla molestie dolor, id sagittis neque iaculis ac.
          </Paragraph>
          <Button btnInfo={btnInfo} />
        </ProfileCopy>
      </Col>
      <Col>
        <ProfilePhoto>
          <Rectangle />
          <Image
            src={profile}
            width='100%'
            height='100%'
            alt='profile picture'
            style={{ width: '100%', height: '100%' }}
            priority={true}
          />
          <Circle />
          <Square />
        </ProfilePhoto>
      </Col>
    </Row>
  )
}

export default MainSection
