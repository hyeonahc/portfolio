import AboutSection from '@components/AboutSection'
// import AchievementSection from '@components/AchievementSection'
import ContactSection from '@components/ContactSection'
import MainSection from '@components/MainSection'
import MyJourneySection from '@components/MyJourneySection'
import ProjectSection from '@components/ProjectSection'

const Home = () => {
  return (
    <div>
      <MainSection />
      <ProjectSection />
      <AboutSection />
      {/* <AchievementSection /> */}
      <MyJourneySection />
      <ContactSection />
    </div>
  )
}

export default Home
