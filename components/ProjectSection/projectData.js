import financeTracker from '@public/project-thumbnail-finance-tracker.png'
import freshTomatoes from '@public/project-thumbnail-fresh-tomatoes.png'
import goTogether from '@public/project-thumbnail-go-together.png'
import tumblerShop from '@public/project-thumbnail-tumbler-shop.png'

export const projectData = [
  {
    thumbnail: financeTracker,
    width: '200px',
    date: 'Jul 2024 - Present',
    title: 'finance tracker',
    devs: [
      'React.ts',
      'TypeScript',
      'Zustand',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    description:
      'Finance Tracker helps users track income and expenses. It offers multiple viewing options, filters by date, and provides a clear financial summary. Future updates will include budgeting, goal tracking, and visual insights for better financial management.',
    links: [
      'https://hyeonahc-finance-tracker.vercel.app/',
      'https://github.com/hyeonahc/finance-tracker',
    ],
  },
  {
    thumbnail: goTogether,
    width: '250px',
    date: 'Sep 2022 - Feb 2023 (6 months)',
    title: 'go together travel agency',
    devs: ['Next.js', 'TypeScript', 'Redux toolkit', 'MUI', 'Java', 'Spring'],
    description:
      'Go Together is a travel booking platform designed for seniors, making vacation planning easy and fun. You can take a quick survey to get personalised travel package recommendations, ensuring every trip matches your interests perfectly.',
    links: [
      'https://gotogether-s.vercel.app/en',
      'https://github.com/gotogether-s/gotogether-s',
    ],
  },
  {
    thumbnail: freshTomatoes,
    maxWidth: '550px',
    date: 'May 2022 (2 weeks)',
    title: 'Fresh Tomatoes',
    devs: ['JavaScript ES6', 'Fetch API', 'SCSS'],
    description:
      'Fresh Tomatoes is a fun, easy-to-use Movies & TV search website inspired by Rotten Tomatoes. Powered by the OMDb API, you can quickly find movies, TV shows, and celebrities, with detailed info and infinite scrolling on the results page.',
    links: [
      'https://fresh-tomatoes-movie-search.netlify.app/',
      'https://github.com/hyeonahc/fresh-tomatoes',
    ],
  },
  {
    thumbnail: tumblerShop,
    maxWidth: '550px',
    date: 'June 2022 - July 2022 (1 month)',
    title: 'tumbler shop (Korean)',
    devs: ['Vue.js', 'Vuex', 'SCSS'],
    description:
      'Tumbler Shop is a fun online marketplace where you can buy tumblers with virtual currency. You can enjoy easy browsing and seamless transactions. Plus, the robust admin tools make managing inventory, tracking sales, and handling transactions a breeze.',
    links: [
      'https://tumbler-shop.netlify.app/',
      'https://github.com/hyeonahc/tumbler-shop',
    ],
  },
]
