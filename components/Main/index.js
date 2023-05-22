import Button from '@components/Button'
import profile from '@public/profile.png'
import { BulletPoint, Highlight } from '@styles/globals'
import Image from 'next/image'
import {
  ButtonWrapper,
  Circle,
  Container,
  Hello,
  Hyeonah,
  Paragraph,
  ProfileCopy,
  ProfilePhoto,
  Rectangle,
  Square,
} from './Main.styled'

const Main = () => {
  return (
    <Container>
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
        <ButtonWrapper>
          <Button
            name='look projects'
            primary={true}
            link='/portfolio'
          />
          <Button
            name='download resume'
            primary={false}
            link='/'
          />
        </ButtonWrapper>
      </ProfileCopy>
      <ProfilePhoto>
        <Rectangle />
        <Image
          src={profile}
          width='100%'
          height='100%'
          alt='profile picture'
          style={{ width: '100%', height: '100%' }}
        />
        <Circle />
        <Square />
      </ProfilePhoto>
    </Container>
  )
}

export default Main
