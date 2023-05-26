import Project from '@components/Project'

const projectsData = [
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

const Projects = () => {
  return (
    <>
      {projectsData.map((projectDetail, index) => (
        <Project
          key={projectDetail.title}
          projectDetail={projectDetail}
          projectNumber={index + 1}
        />
      ))}
    </>
  )
}

export default Projects
