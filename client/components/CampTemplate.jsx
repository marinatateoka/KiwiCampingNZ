import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

function CampTemplate (props) {
  const { campItem } = props

  return (
    <>
    <div className='wrapper'>
       <Image className='picture' src={'images/1.motuoraIsland.jpg'}/>  
      <div>
        <p className='details'>
          {campItem.Name} </p>
        <p className='address'>
          {campItem.Address}
        </p>
      </div>
      <div className='button'>
      <Button className='button'>Review</Button>
      </div>
   </div>
</>
  )
}

export default CampTemplate
