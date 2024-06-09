import Button from '@components/Common/Button'
import profile from '@public/profile.png'
import { BulletPoint, Highlight } from '@styles/globals'
import Image from 'next/image'
import {
  Circle,
  Col,
  Hello,
  Hyeonah,
  Paragraph,
  ProfileCopy,
  ProfilePhoto,
  Rectangle,
  Row,
  Square,
} from './MainSection.styled'

const btnInfo = [
  {
    name: 'view projects',
    sectionTo: 'projects',
  },
  {
    name: 'view resume',
    link: 'https://drive.google.com/file/d/1lwREIDbxRcqItX8VD1I4JUpvoZpla249/view?usp=sharing',
  },
]

const MainSection = () => {
  return (
    <Row id='home'>
      <Col flexBasis='60%' mdOrder='1'>
        <ProfileCopy>
          <Hello>
            <BulletPoint top='-10px' left='-15px' />
            Welcome to my portfolio!
          </Hello>
          <Hyeonah>
            I am <Highlight>Hyeonah</Highlight>
          </Hyeonah>
          <Paragraph>
            I'm a Hardware Integration Engineer, ensuring EV chargers integrate
            seamlessly with ChargeLab's software. Now, I'm excited to transition
            into full-stack development. This portfolio showcases my journey
            through various personal and team projects. Join me as I learn,
            evolve, and create in the world of software development!
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
