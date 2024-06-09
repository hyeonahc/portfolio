import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about from '@public/about.png'
import { BulletPoint } from '@styles/globals'
import Image from 'next/image'
import {
  Col,
  ImageWrapper,
  Paragraph,
  Row,
  Square,
  Tag,
  TagBox,
  Tags,
  Title,
} from './AboutSection.styled'

const tags = [
  'JavaScript, TypeScript',
  'React.js, Next.js, Redux',
  'React Testing (Jest)',
  'Node.js, Express.js',
  'HTML, CSS, Sass/Scss',
  'Bootstrap, Material UI, Tailwind CSS',
  'Git, REST-ful APIs, Postman',
  'Agile, Confluence/Jira',
]

const AboutSection = () => {
  return (
    <>
      <Row id='about'>
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
            <BulletPoint top='1px' left='-15px' />
          </Title>
          <Paragraph>
            My career journey has taken me from building websites at a marketing
            agency to QA testing electric vehicle chargers at a SaaS company.
            Now, I&apos;m excited to transition that experience into creating
            innovative and functional web applications.
            <br />
            <br />I love turning real-world needs into impactful code, using my
            technical skills and talent for problem-solving. Here are some of
            the tools and technologies I work with:
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
    </>
  )
}

export default AboutSection
