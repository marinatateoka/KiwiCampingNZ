import React from 'react'
import Myheader from './Myheader'
import CampList from './CampList'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Myheader />
        <CampList />
      </React.Fragment>
    )
  }
}

export default App
