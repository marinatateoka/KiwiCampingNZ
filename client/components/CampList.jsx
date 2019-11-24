import React from 'react'
import campData from '../../data/campList'
import CampTemplate from './CampTemplate'


class CampList extends React.Component {
  render () {
    return (
      <div>
        {campData.campList.map(campItem => {
          return <CampTemplate key={campItem.id} campItem={campItem} />
        })}
       
      </div>
    )
  }
}

export default CampList
