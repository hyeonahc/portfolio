import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BulletPoint } from '@styles/globals'
import Link from 'next/link'
import { useState } from 'react'
import { MyJourneyData } from './MyJourneyData.js'
import {
  Col,
  Content,
  ExperienceList,
  ExperienceWrapper,
  IconCompleted,
  Indicator,
  Label,
  Line,
  Organization,
  OrganizationDurationWrapper,
  Position,
  Row,
  Tab,
  TabButton,
  Tabs,
  Title,
} from './MyJourneySection.styled'

const MyJourneySection = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [completedStep, setCompletedStep] = useState(0)

  const disableNavigation = false

  const isStepCurrent = index => index + 1 === currentStep
  const isStepCompleted = index =>
    index + 1 !== currentStep && completedStep >= index + 1
  const isStepNavigable = index => completedStep >= index

  const getStepClassNames = index => {
    let result
    if (currentTabIndex === index) {
      result = 'active'
    }
    if (isStepCurrent(index)) {
      result = `${result} current`
    }
    if (isStepCompleted(index)) {
      result = `${result} completed`
    }
    if (isStepNavigable(index)) {
      result = `${result} navigable`
    }
    return result
  }

  const clickTab = index => {
    setCurrentTabIndex(index)
    setCurrentStep(index + 1)
    setCompletedStep(index)
  }

  return (
    <Row id='myjourney'>
      <Col>
        <Title>
          my journey
          <BulletPoint top='1px' right='-15px' mdRight='150px' />
        </Title>
        <ExperienceWrapper>
          <Tabs>
            {MyJourneyData.map((myJourney, index) => (
              <Tab key={index} id={index} className={getStepClassNames(index)}>
                {index > 0 && <Line />}
                <TabButton
                  disabled={disableNavigation && !isStepNavigable(index)}
                  onClick={() => clickTab(index)}
                >
                  <Indicator>
                    {isStepCompleted(index) && (
                      <IconCompleted
                        width='10'
                        height='7'
                        viewBox='0 0 12 9'
                        fill='currentColor'
                      >
                        <path d='M1.05025 3.70714C1.44077 3.31661 2.07394 3.31661 2.46446 3.70714L5.29289 6.53556C5.68341 6.92609 5.68341 7.55925 5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978L1.05025 5.12135C0.659724 4.73083 0.659724 4.09766 1.05025 3.70714Z' />
                        <path d='M10.9498 0.878709C11.3403 1.26923 11.3403 1.9024 10.9498 2.29292L5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978C3.48815 7.55925 3.48816 6.92609 3.87869 6.53556L9.53554 0.878709C9.92606 0.488184 10.5592 0.488184 10.9498 0.878709Z' />
                      </IconCompleted>
                    )}
                  </Indicator>
                  <Label>{myJourney.year}</Label>
                </TabButton>
              </Tab>
            ))}
          </Tabs>
          <Content>
            {MyJourneyData.map((myJourney, index) => (
              <div key={index}>
                {currentTabIndex === index && (
                  <>
                    <Position>{myJourney.position}</Position>
                    <OrganizationDurationWrapper>
                      <Organization>
                        <Link href={myJourney.link}>
                          @ {myJourney.organization}
                        </Link>
                      </Organization>
                      <p>{myJourney.duration}</p>
                    </OrganizationDurationWrapper>
                    <ul>
                      {myJourney.experiences.map((myJourney, index) => (
                        <ExperienceList key={index}>
                          <FontAwesomeIcon icon={faPlay} />
                          {myJourney}
                        </ExperienceList>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </Content>
        </ExperienceWrapper>
      </Col>
    </Row>
  )
}

export default MyJourneySection
