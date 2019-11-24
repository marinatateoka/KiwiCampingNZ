import React from 'react'
import Menubar from './Menubar'

import { 
  Header, 
  Container,
 } from 'semantic-ui-react'

class Myheader extends React.Component {
  render () {
    return (   
    <div className='myheader'>
    <Container>
      <Menubar />
           
            <h1 className= 'title'>Kiwi Camping</h1> 
            <img src={'images/kiwi.png'} className='kiwi' />
        
    </Container> 
    </div>
    
         
    
    )
  }
}

export default Myheader
