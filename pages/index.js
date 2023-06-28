import AboutSection from '@components/AboutSection'
import AchievementSection from '@components/AchievementSection'
import ContactSection from '@components/ContactSection'
import ExperienceSection from '@components/ExperienceSection'
import MainSection from '@components/MainSection'
import ProjectSection from '@components/ProjectSection'

const Home = () => {
  return (
    <div>
      <MainSection />
      <ProjectSection />
      <AboutSection />
      <AchievementSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default Home
