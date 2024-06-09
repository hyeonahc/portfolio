import Button from '@components/Common/Button'
import { Row, Title } from './ProjectCTA.styled'

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
    <Row flexDirection='column' gap='1.5em'>
      <Title>
        Explore more of my work on GitHub
        <br />
        to see additional projects, code samples, and contributions.
      </Title>
      <Button btnInfo={btnInfo} />
    </Row>
  )
}

export default ProjectCTA
