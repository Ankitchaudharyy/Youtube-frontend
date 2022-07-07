import React, { useContext } from 'react'
import './styles/ExpandedSideMenuOptionStyles.css';
import Tooltip from '@mui/material/Tooltip';
import { SelectedOptionContext } from '../../../context/SideMenuContext';

function ExpandedSideMenuOption({ text, Icon, OutlinedIcon }) {
  const {selected, setSelected} = useContext(SelectedOptionContext);
  
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

export default ExpandedSideMenuOption