import React from 'react'

import { Header } from 'semantic-ui-react'

class Myheader extends React.Component {
  render () {
    return (
      <Header>
        <div className='header'>
          <h1 className= 'title'>KiwiCamping</h1>
          <img src={'images/kiwi.png'} className='kiwi' />
        </div>
      </Header>
    )
  }
}

export default Myheader
