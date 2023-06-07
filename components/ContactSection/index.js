import Button from '@components/Common/Button'
import { Highlight, Row } from '@styles/globals'
import { Paragraph, Title } from './ContactSection.styled'

const btnInfo = [
  {
    name: 'contact me',
    link: 'mailto: hyeonah.hello@gmail.com',
  },
]

const ContactSection = () => {
  return (
    <Row
      id='contact'
      padding='150px 0'
      flexDirection='column'
      gap='1.5em'>
      <Title>
        let&apos;s <Highlight>work together</Highlight>
      </Title>
      <Paragraph>
        Let&apos;s turn your ideas into reality!
        <br />
        Reach out and let&apos;s create something amazing together.
      </Paragraph>
      <Button btnInfo={btnInfo} />
    </Row>
  )
}

export default ContactSection
