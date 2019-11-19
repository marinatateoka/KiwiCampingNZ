import React from 'react'

const CampTemplate = (props) => {
  const campItem = props.campItem
  
  return (
    <div className='wrapper'>
      <div>
        <img src={'images/1.motuoraIsland.jpg'} className='picture'/>
        {/* <p>{campItem.name}</p> */}
      </div>

    </div>
  )
}

export default CampTemplate
