import React from 'react'
import Header from './Header'
import CampTemplate from './CampTemplate'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CampTemplate />
        <CampTemplate />
        <CampTemplate />
      </React.Fragment>
    )
  }
}



export default App
