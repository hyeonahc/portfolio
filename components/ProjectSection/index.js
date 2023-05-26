import ProjectCTA from '@components/ProjectCTA'
import ProjectItem from '@components/ProjectItem'

const projectData = [
  {
    date: 'Sep 2022 – Present',
    title: 'Go Together Travel Agency',
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
    title: 'Go Together Travel Agency',
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
    title: 'Go Together Travel Agency',
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
    <>
      {projectData.map((projectItemData, index) => (
        <ProjectItem
          key={projectItemData.title}
          projectItemData={projectItemData}
          projectNumber={index + 1}
        />
      ))}
      <ProjectCTA />
    </>
  )
}

export default ProjectSection
