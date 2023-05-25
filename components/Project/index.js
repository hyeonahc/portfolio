import Button from '@components/Button'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import project from '@public/project.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Date, Description, Tag, TagBox, Tags, Title } from './Project.styled'

const Project = ({ projectDetail, projectNumber }) => {
  const { date, title, tags, description, links } = projectDetail

  const initialBtnInfo = [
    {
      name: 'visit website',
      link: '',
      newTab: true,
    },
    {
      name: 'view project detail',
      link: '',
      newTab: true,
    },
  ]

  const [btnInfo, setBtnInfo] = useState(initialBtnInfo)

  function getLinkForBtnInfo() {
    const updatedBtnInfo = initialBtnInfo.map((info, index) => {
      console.log(info)
      return {
        ...info,
        link: links[index],
      }
    })
    setBtnInfo(updatedBtnInfo)
  }

  useEffect(() => {
    getLinkForBtnInfo()
  }, [])

  return (
    <Row
      height='90vh'
      justifyContent='space-evenly'
      gap='5em'>
      <Col
        flexBasis='70%'
        order={projectNumber % 2 === 0 && 1}>
        <Date>
          <BulletPoint
            top='-0.5em'
            left='-0.75em'
          />
          {date}
        </Date>
        <Title>{title}</Title>
        <Tags>
          {tags.map(tag => (
            <TagBox key={tag}>
              <FontAwesomeIcon icon={faPlay} />
              <Tag>{tag}</Tag>
            </TagBox>
          ))}
        </Tags>
        <Description>{description}</Description>
        <Button btnInfo={btnInfo} />
      </Col>
      <Col>
        <Image
          src={project}
          width='100%'
          height='100%'
          alt='project picture'
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
    </Row>
  )
}

export default Project
