import { Col, Row } from '@styles/globals'
import { Description, Emoji, Number, Wrapper } from './Achievement.styled'

const AchievementSection = () => {
  const achievementData = [
    {
      emoji: '💼',
      number: '2.5',
      description: 'Over the past 3 years, I’ve worked with 4 companies',
    },
    {
      emoji: '👩🏻‍💻',
      number: '30+',
      description:
        'I designed, developed, fixed, hosted, maintained more than 30 websites',
    },
    {
      emoji: '⚡',
      number: '1,661',
      description: 'I made 1,661 contributions in 2022',
    },
  ]

  return (
    <Row height='250px'>
      {achievementData.map((achievement, index) => (
        <Col
          key={index}
          flexBasis='33.333%'>
          <Wrapper>
            <Emoji>{achievement.emoji}</Emoji>
            <Number>{achievement.number}</Number>
            <Description>{achievement.description}</Description>
          </Wrapper>
        </Col>
      ))}
    </Row>
  )
}

export default AchievementSection
