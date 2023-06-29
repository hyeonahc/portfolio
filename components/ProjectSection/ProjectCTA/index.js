import Button from '@components/Common/Button'
import { BulletPoint } from '@styles/globals'
import { Row, Title } from './ProjectCTA.styled'

const btnInfo = [
  // {
  //   name: 'load more projects',
  //   link: '/portfolio',
  //   newTab: false,
  // },
  {
    name: 'load more projects',
    link: 'https://github.com/hyeonahc',
  },
]

const ProjectCTA = () => {
  return (
    <Row
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
