import React from 'react'
import campList from '../../seeds/campList'
import CampTemplate from './CampTemplate'

class CampList extends React.Component {
  render () {
    return (

      <div>
        {campList.map(campItem => {
          return <CampTemplate key={campItem.id} campItem={campItem} />
        })}
      </div>
    )
  }
}

export default CampList
