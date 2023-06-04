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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          ultrices libero nec imperdiet sollicitudin. Phasellus consectetur
          augue justo, et imperdiet lorem porttitor nec. Duis ut magna ut velit
          mattis maximus. Integer aliquet tellus ante, id laoreet enim varius
          non. Pellentesque ullamcorper tincidunt nibh, sit amet luctus nulla
          commodo sit amet.
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
  )
}

export default AboutSection
