import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

function CampTemplate (props) {
  const { campItem } = props

  return (

    <Segment>
      <Image src={'images/1.motuoraIsland.jpg'} size='small' floated='left'/>
      <p>
        {campItem.name}
      </p>
    </Segment>

  )
}

export default CampTemplate
