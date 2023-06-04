import Button from '@components/Common/Button'
import { BulletPoint, Row } from '@styles/globals'
import { Title } from './ProjectCTA.styled'

const btnInfo = [
  {
    name: 'load more projects',
    link: '/portfolio',
    newTab: false,
  },
]

const ProjectCTA = () => {
  return (
    <Row
      padding='5em 0'
      flexDirection='column'
      gap='1.5em'>
      <Title>
        <BulletPoint
          top='1px'
          left='-15px'
        />
        take a look at
        <br />
        my best work
      </Title>
      <Button btnInfo={btnInfo} />
    </Row>
  )
}

export default ProjectCTA