import React from 'react'
import './styles/SideMenuOption.css';
import Tooltip from '@mui/material/Tooltip';

function SideMenuOption({ text, Icon, OutlinedIcon }) {
  return (
    <Tooltip title={text} placement="bottom-end">
      <div className='menuOption'>
        <div className='sideIcon'>
          {OutlinedIcon}
        </div>
        <div className='text'>
          {text}
        </div>
      </div>
    </Tooltip>
  )
}

export default SideMenuOption