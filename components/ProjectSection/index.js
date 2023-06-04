import ProjectCTA from '@components/ProjectSection/ProjectCTA'
import ProjectItem from '@components/ProjectSection/ProjectItem'

const projectData = [
  {
    date: 'Sep 2022 – Present',
    title: 'go together travel agency',
    tags: ['Next.js', 'Redux', 'MUI'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus sodales ante porttitor dignissim. Pellentesque pretium dignissim lectus, eget mollis purus suscipit sit amet. Morbi eu faucibus erat.',
    links: [
      'https://gotogether-s.vercel.app/en',
      'https://github.com/gotogether-s/gotogether-s',
    ],
  },
  {
    date: 'Sep 2022 – Present',
    title: 'go together travel agency',
    tags: ['Next.js', 'Redux', 'MUI'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus sodales ante porttitor dignissim. Pellentesque pretium dignissim lectus, eget mollis purus suscipit sit amet. Morbi eu faucibus erat.',
    links: [
      'https://gotogether-s.vercel.app/en',
      'https://github.com/gotogether-s/gotogether-s',
    ],
  },
  {
    date: 'Sep 2022 – Present',
    title: 'go together travel agency',
    tags: ['Next.js', 'Redux', 'MUI'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus sodales ante porttitor dignissim. Pellentesque pretium dignissim lectus, eget mollis purus suscipit sit amet. Morbi eu faucibus erat.',
    links: [
      'https://gotogether-s.vercel.app/en',
      'https://github.com/gotogether-s/gotogether-s',
    ],
  },
]

const ProjectSection = () => {
  return (
    <div id='projects'>
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
