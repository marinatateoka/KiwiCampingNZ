import React from 'react'
import Subheader from './Subheader'
import CampList from './CampList'
import Menubar from './Menubar'
import CampTemplate from './CampTemplate'


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Menubar />
        <Subheader />
        <CampList /> 
      </React.Fragment>
    )
  }
}

export default App
