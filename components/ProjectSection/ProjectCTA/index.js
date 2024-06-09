import Button from '@components/Common/Button'
import { Row, Title, Title1, Title2 } from './ProjectCTA.styled'

const btnInfo = [
  // {
  //   name: 'load more projects',
  //   link: '/portfolio',
  //   newTab: false,
  // },
  {
    name: 'View More Projects on GitHub',
    link: 'https://github.com/hyeonahc',
  },
]

const ProjectCTA = () => {
  return (
    <Row flexDirection='column' gap='3em'>
      <Title>
        <Title1>Explore more of my work on GitHub</Title1>
        <Title2>
          to see additional projects, code samples, and contributions.
        </Title2>
      </Title>
      <Button btnInfo={btnInfo} />
    </Row>
  )
}

export default ProjectCTA
