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
      padding='5em 0'
      flexDirection='column'
      gap='1.5em'>
      <Title>
        let&apos;s <Highlight>work together</Highlight>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        luctus sodales ante porttitor dignissim.
      </Paragraph>
      <Button btnInfo={btnInfo} />
    </Row>
  )
}

export default ContactSection
