import React from 'react'
import './styles/SideMenuOption.css';
import Tooltip from '@mui/material/Tooltip';

function SideMenuOption({ text, Icon, OutlinedIcon, selected, setSelected }) {
  const sel = selected === text ? "selectedOption" : "";

  return (
    <Tooltip title={text} placement="bottom-end">
      <div className={`menuOption ${sel}`} onClick={() => setSelected(text)}>
        <div className='sideIcon'>
          {selected === text ? Icon : OutlinedIcon}
        </div>
        <div className='text'>
          {text}
        </div>
      </div>
    </Tooltip>
  )
}

export default SideMenuOption