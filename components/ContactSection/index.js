import Button from '@components/Common/Button'
import { Highlight } from '@styles/globals'
import { Paragraph, Row, Title } from './ContactSection.styled'

const btnInfo = [
  {
    name: 'contact me',
    link: 'mailto: hyeonah.hello@gmail.com',
  },
]

const ContactSection = () => {
  return (
    <Row id='contact'>
      <Title>
        let&apos;s <Highlight>work together</Highlight>
      </Title>
      <Paragraph>
        Let&apos;s turn ideas into reality!
        <br />
        Reach out and let&apos;s create something amazing together.
      </Paragraph>
      <Button btnInfo={btnInfo} />
    </Row>
  )
}

export default ContactSection
