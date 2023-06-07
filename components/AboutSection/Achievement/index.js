import { Col, Row } from '@styles/globals'
import { Description, Emoji, Number, Wrapper } from './Achievement.styled'

const Achievement = () => {
  const achievementData = [
    {
      emoji: '💼',
      number: '3+ Years',
      description:
        'With three years of hands-on experience in the field of front-end development, I have honed my skills and expertise in crafting visually stunning and user-friendly websites. ',
    },
    {
      emoji: '👩🏻‍💻',
      number: '40+ Websites',
      description:
        'I successfully developed and maintained over 40 websites across diverse industries',
    },
    {
      emoji: '⚡',
      number: '1,661 Contributions',
      description:
        'Throughout the year of 2022, I made an impressive 1,661 contributions in GitHub',
    },
  ]

  return (
    <Row padding='50px 0'>
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

export default Achievement
