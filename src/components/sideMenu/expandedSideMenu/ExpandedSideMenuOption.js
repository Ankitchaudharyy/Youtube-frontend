import React, { useContext } from 'react'
import './styles/ExpandedSideMenuOptionStyles.css';
import Tooltip from '@mui/material/Tooltip';
import { SelectedOptionContext } from '../../../context/SideMenuContext';
import {useNavigate} from 'react-router';

function ExpandedSideMenuOption({ text, Icon, OutlinedIcon }) {
  const navigate = useNavigate();

  const {selected, setSelected} = useContext(SelectedOptionContext);
  
  const sel = selected === text ? "selectedOption" : "";

  const handleClick = () => {
    setSelected(text);
    if(text === "Home")
      navigate('/Youtube-frontend');
  }

  return (
    <Tooltip title={text} placement="bottom-end">
      <div className={`menuOption ${sel}`} onClick={handleClick}>
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