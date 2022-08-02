import React, { useContext } from 'react';
import { SelectedOptionContext } from '../../../context/SideMenuContext';
import './styles/CollapsedSideMenuOptionStyles.css';
import {useNavigate} from 'react-router';

function CollapsedSideMenuOption({ text, Icon, OutlinedIcon }) {
    const navigate = useNavigate();
    const {selected, setSelected} = useContext(SelectedOptionContext);

    const handleClick = () => {
        setSelected(text);
        if(text === "Home")
          navigate('/Youtube-frontend');
      }

    return (
        <div className="collapsedMenuOption" onClick={handleClick}>
            <div>
                {selected === text ? Icon : OutlinedIcon}
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

export default CollapsedSideMenuOption