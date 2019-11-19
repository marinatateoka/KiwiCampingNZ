import React from 'react'
import Header from './Header'
import CampTemplate from './CampTemplate'
import CampList from './CampList'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <CampList />
      </React.Fragment>
    )
  }
}

export default App
