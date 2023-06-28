import ProjectCTA from '@components/ProjectSection/ProjectCTA'
import ProjectItem from '@components/ProjectSection/ProjectItem'
import { BulletPoint } from '@styles/globals'
import { Title } from './ProjectSection.styled'
import { projectData } from './projectData'

const ProjectSection = () => {
  return (
    <div id='projects'>
      <Title>
        projects
        <BulletPoint
          top='1px'
          left='-15px'
        />
      </Title>
      {projectData.map((projectItemData, index) => (
        <ProjectItem
          key={index}
          projectItemData={projectItemData}
          projectNumber={index + 1}
        />
      ))}
      <ProjectCTA />
    </div>
  )
}

export default ProjectSection
