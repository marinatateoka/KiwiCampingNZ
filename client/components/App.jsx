import React from 'react'
import Myheader from './Myheader'
import Subheader from './Subheader'
import CampList from './CampList'
import Menubar from './Menubar'
import { Menu } from 'semantic-ui-react'
// import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Menubar />
        <Subheader />
        <CampList /> 
        <CampList /> 
        <CampList /> 
        <CampList /> 
        {/* <Home /> */}
      </React.Fragment>
    )
  }
}

export default App
