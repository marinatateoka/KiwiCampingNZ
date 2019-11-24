import React from 'react'
import campData from '../../data/campList'
import CampTemplate from './CampTemplate'
import { getCampList } from './api'


class CampList extends React.Component {
  state = {
    campList: [],
    campId: ''
  }


componentDidMount() {
    getCampList().then(campListData => {
      this.setState({ campList: campListData });
    });
  }  
  
  render () {
    return (
      <div>
        {/* here I am using a js file to access the information. I now want to use the api. I  have tried {this.state.campList.map} but it did not work */}
        {campData.campList.map(campItem => {
          return <CampTemplate key={campItem.id} campItem={campItem} />
        })}
       
      </div>
    )
  }
}

export default CampList
