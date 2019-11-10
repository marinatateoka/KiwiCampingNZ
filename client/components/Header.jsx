import React from 'react'


class Header extends React.Component {
  render() {
    return (
        <div className='header'>
            <h1 className= 'title'>KiwiCampingNZ</h1>
               <img src={'images/kiwi.png'} className='kiwi' />
        </div>
    )
  }
}


export default Header