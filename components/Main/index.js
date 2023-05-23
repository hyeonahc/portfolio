import Button from '@components/Button'
import profile from '@public/profile.png'
import { BulletPoint, Highlight, SectionContainer } from '@styles/globals'
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
} from './Main.styled'

const buttonInfo = [
  {
    name: 'look projects',
    primary: true,
    link: '/portfolio',
  },
  {
    name: 'download resume',
    primary: false,
    link: '/',
  },
]

const Main = () => {
  return (
    <SectionContainer
      height='90vh'
      justifyContent='space-evenly'
      gap='5em'>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum
          blandit lorem in pulvinar. Ut ultricies justo non lacus sodales
          placerat in in velit. Nam euismod placerat laoreet. Pellentesque
          fringilla molestie dolor, id sagittis neque iaculis ac.
        </Paragraph>
        <Button buttonInfo={buttonInfo} />
      </ProfileCopy>
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
    </SectionContainer>
  )
}

export default Main
