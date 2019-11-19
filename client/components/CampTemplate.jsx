import React from 'react'

function CampTemplate (props) {
  const { campItem } = props
  
  return (
    <div className='wrapper'>
      <div>
       <p>{campItem.name}</p>
        <img src={'images/1.motuoraIsland.jpg'} className='picture'/>
      
      </div>

    </div>
  )
}

export default CampTemplate
