import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about from '@public/about.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import {
  ImageWrapper,
  Paragraph,
  Square,
  Tag,
  TagBox,
  Tags,
  Title,
} from './AboutSection.styled'
import Achievement from './Achievement'

const tags = [
  'JavaScript, TypeScript',
  'React.js, Next.js, Vue.js,',
  'Redux',
  'WordPress',
  'HTML, CSS, Sass/Scss',
  'Bootstrap, MUI',
]

const AboutSection = () => {
  return (
    <>
      <Row
        id='about'
        height='90vh'
        justifyContent='space-evenly'
        gap='5em'>
        <Col flexBasis='40%'>
          <ImageWrapper>
            <Image
              src={about}
              width='100%'
              height='100%'
              alt='about picture'
              style={{ width: '20em', height: '100%' }}
            />
            <Square />
          </ImageWrapper>
        </Col>
        <Col flexBasis='60%'>
          <Title>
            about me
            <BulletPoint
              top='1px'
              left='-15px'
            />
          </Title>
          <Paragraph>
            I firmly believe that a well-designed and interactive website can
            leave a lasting impression on users. As a front-end developer, I
            specialize in crafting intuitive user interfaces and seamless
            interactions that not only captivate visitors but also make their
            online experiences enjoyable and effortless.
            <br />
            <br />
            My journey as a front-end developer has allowed me to acquire a
            diverse skill set that encompasses proficiency in the folloing:
          </Paragraph>
          <Tags>
            {tags.map((tag, index) => (
              <TagBox key={index}>
                <FontAwesomeIcon icon={faPlay} />
                <Tag>{tag}</Tag>
              </TagBox>
            ))}
          </Tags>
        </Col>
      </Row>
      <Row>
        <Col flexBasis='100%'>
          <Achievement />
        </Col>
      </Row>
    </>
  )
}

export default AboutSection
