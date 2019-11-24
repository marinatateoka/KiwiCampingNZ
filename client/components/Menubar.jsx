import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Menubar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
      <Menu color='teal' 
      style={{
            paddingTop: '2%',
            paddingRight: '2%',
          }}  >
        <Menu.Item header 
          position='right'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Log in
        </Menu.Item>

        <Menu.Item
          position='right'
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        >
          Sign up
        </Menu.Item>

        <h1 className= 'title'>Kiwi Camping</h1> 
        <img src={'images/kiwi.png'} className='kiwi' />

      </Menu>
      </Container>
    )
  }
}

