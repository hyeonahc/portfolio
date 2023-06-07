import Button from '@components/Common/Button'
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
  const { thumbnail, maxWidth, date, title, devs, description, links } =
    projectItemData

  const initialBtnInfo = [
    {
      name: 'visit website',
      link: '',
    },
    {
      name: 'view project detail',
      link: '',
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
      padding='0 0 150px 0'
      justifyContent='space-evenly'
      gap='3em'>
      <Col order={projectNumber === 2 ? 1 : 0}>
        <Image
          src={thumbnail}
          width='100%'
          height='100%'
          alt='project picture'
          style={{ width: '100%', height: '100%', maxWidth: maxWidth }}
        />
      </Col>
      <Col>
        <Date>
          <BulletPoint
            top='-10px'
            left='-15px'
          />
          {date}
        </Date>
        <Title>{title}</Title>
        <Tags>
          {devs.map((dev, index) => (
            <TagBox key={index}>
              <Tag>#{dev}</Tag>
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
