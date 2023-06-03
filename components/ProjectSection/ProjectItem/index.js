import Button from '@components/Common/Button'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import project from '@public/project.png'
import { BulletPoint, Col, Row } from '@styles/globals'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Date,
  Description,
  Tag,
  TagBox,
  Tags,
  Title,
} from './ProjectItem.styled'

const ProjectItem = ({ projectItemData, projectNumber }) => {
  const { date, title, tags, description, links } = projectItemData

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
      padding='10em 0'
      justifyContent='space-evenly'
      gap='5em'>
      <Col order={projectNumber === 2 ? 1 : 0}>
        <Image
          src={project}
          width='100%'
          height='100%'
          alt='project picture'
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
      <Col flexBasis='70%'>
        <Date>
          <BulletPoint
            top='-10px'
            left='-15px'
          />
          {date}
        </Date>
        <Title>{title}</Title>
        <Tags>
          {tags.map((tag, index) => (
            <TagBox key={index}>
              <FontAwesomeIcon icon={faPlay} />
              <Tag>{tag}</Tag>
            </TagBox>
          ))}
        </Tags>
        <Description>{description}</Description>
        <Button btnInfo={btnInfo} />
      </Col>
    </Row>
  )
}

export default ProjectItem
