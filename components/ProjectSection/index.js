import ProjectCTA from '@components/ProjectSection/ProjectCTA'
import ProjectItem from '@components/ProjectSection/ProjectItem'
import freshTomatoes from '@public/project-thumbnail-fresh-tomatoes.png'
import goTogether from '@public/project-thumbnail-go-together.png'
import tumblerShop from '@public/project-thumbnail-tumbler-shop.png'
import { BulletPoint } from '@styles/globals'
import { Title } from './ProjectSection.styled'

const projectData = [
  {
    thumbnail: goTogether,
    maxWidth: '300px',
    date: 'Sep 2022 – Feb 2023 (6 months)',
    title: 'go together travel agency',
    devs: ['Next.js', 'TypeScript', 'Redux toolkit', 'MUI', 'Java', 'Spring'],
    description:
      'Go Together is a travel service platform that aims to provide convenient vacation package bookings for seniors and individuals who face challenges in planning their travels. The client, Go Together Travel Agency (operated by The Shiny), required the development of a new website to address their specific requirements. The project team consists of eight members working on website design and development.',
    links: [
      'https://gotogether-s.vercel.app/en',
      'https://github.com/gotogether-s/gotogether-s',
    ],
  },
  {
    thumbnail: freshTomatoes,
    maxWidth: '600px',
    date: 'May 2022 (2 weeks)',
    title: 'Fresh Tomatoes',
    devs: ['JavaScript ES6', 'Fetch API', 'SCSS'],
    description:
      'Fresh Tomatoes is an innovative and user-friendly online platform designed to enhance your movie and TV show discovery experience. With its extensive database sourced from the OMDb API, Fresh Tomatoes provides you with a seamless and efficient search process to find your favorite movies, TV shows, and celebrity content.',
    links: [
      'https://fresh-tomatoes-movie-search.netlify.app/',
      'https://github.com/hyeonahc/fresh-tomatoes',
    ],
  },
  {
    thumbnail: tumblerShop,
    maxWidth: '600px',
    date: 'June 2022 – July 2022 (1 month)',
    title: 'tumbler shop (Korean)',
    devs: ['Vue.js', 'Vuex', 'SCSS'],
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
