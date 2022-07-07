import React from 'react'
import './styles/SideMenuOption.css';

function SideMenuOption({ text, Icon, OutlinedIcon }) {
  return (
    <div className='menuOption'>
      <div className='icon'>
        {OutlinedIcon}
      </div>
      <div className='text'>      
        {text}
      </div>
    </div>
  )
}

export default SideMenuOption