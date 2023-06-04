import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BulletPoint, Col, Row } from '@styles/globals'
import Link from 'next/link'
import { useState } from 'react'
import {
  Content,
  ContentItem,
  Duration,
  ExperienceLi,
  ExperienceUl,
  Organization,
  OrganizationDurationWrapper,
  Position,
  Tab,
  TabWrapper,
  Tabs,
  Title,
} from './ExperienceSection.styled'
import { MyJourneys } from './MyJourneys'

const ExperienceSection = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState('1')

  const clickTab = e => {
    setCurrentTabIndex(e.target.id)
  }

  return (
    <Row
      id='experience'
      height='90vh'
      flexDirection='row'
      justifyContent='center'
      gap='1em'>
      <Col flexBasis='80%'>
        <Title>
          my journey
          <BulletPoint
            top='1px'
            right='-15px'
          />
        </Title>
        <TabWrapper>
          <Tabs>
            {MyJourneys.map((myJourney, index) => (
              <Tab
                key={index}
                id={index}
                className={currentTabIndex === `${index}` && 'active'}
                onClick={clickTab}>
                {myJourney.organization}
              </Tab>
            ))}
          </Tabs>
          <Content>
            {MyJourneys.map((myJourney, index) => (
              <ContentItem key={index}>
                {currentTabIndex === `${index}` && (
                  <>
                    <Position>{myJourney.position}</Position>
                    <OrganizationDurationWrapper>
                      <Organization>
                        <Link href={myJourney.link}>
                          @ {myJourney.organization}
                        </Link>
                      </Organization>
                      <Duration>{myJourney.duration}</Duration>
                    </OrganizationDurationWrapper>
                    <ExperienceUl>
                      {myJourney.experiences.map((experience, index) => (
                        <ExperienceLi key={index}>
                          <FontAwesomeIcon icon={faPlay} />
                          {experience}
                        </ExperienceLi>
                      ))}
                    </ExperienceUl>
                  </>
                )}
              </ContentItem>
            ))}
          </Content>
        </TabWrapper>
      </Col>
    </Row>
  )
}

export default ExperienceSection
