import ProjectCTA from '@components/ProjectSection/ProjectCTA'
import ProjectItem from '@components/ProjectSection/ProjectItem'
import { BulletPoint } from '@styles/globals'
import { Title } from './ProjectSection.styled'

const projectData = [
  {
    date: 'Sep 2022 – Feb 2023',
    title: 'go together travel agency',
    devs: [
      'Next.js',
      'TypeScript',
      'Redux toolkit',
      'MUI',
      'Java',
      'Spring',
      'Jenkins',
    ],
    description:
      'Go Together is a travel service platform that aims to provide convenient vacation package bookings for seniors and individuals who face challenges in planning their travels. The client, Go Together Travel Agency (operated by The Shiny), required the development of a new website to address their specific requirements. The project team consists of eight members working on website design and development.',
    links: [
      'https://gotogether-s.vercel.app/en',
      'https://github.com/gotogether-s/gotogether-s',
    ],
  },
  {
    date: 'Feb 2023 - Feb 2023 ',
    title: 'Recipe World',
    devs: ['React.js', 'Redux toolkit', 'react-router-dom v6', 'MUI'],
    description:
      'Recipe World is a recipe search website that utilizes a database obtained from the spoonacular API. It allows users to search for food recipes by cuisine and provides detailed information about the cuisine, including its health information (such as vegan and dairy-free options), a list of ingredients with measurements, and cooking instructions.',
    links: [
      'https://welcometorecipeworld.netlify.app/',
      'https://github.com/hyeonahc/recipe-website',
    ],
  },
  {
    date: 'June 2022 – July 2022',
    title: 'tumbler shop (Korean)',
    devs: ['Vue.js', 'Vuex', 'Scss'],
    description:
      'Tumbler Shop is an online marketplace that offers a wide selection of tumblers from various brands. Users can easily browse, compare, and purchase their desired tumblers, eliminating the hassle of searching through multiple stores. With a user-friendly interface and convenient features like account registration, product management, and purchase history, Tumbler Shop provides a seamless shopping experience for tumbler enthusiasts.',
    links: [
      'https://tumbler-shop.netlify.app/',
      'https://github.com/hyeonahc/tumbler-shop',
    ],
  },
]

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
