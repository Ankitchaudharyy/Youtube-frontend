import React, { useContext } from 'react';
import { SelectedOptionContext } from '../../../context/SideMenuContext';
import './styles/CollapsedSideMenuOptionStyles.css'

function CollapsedSideMenuOption({ text, Icon, OutlinedIcon }) {

    const {selected, setSelected} = useContext(SelectedOptionContext);

    return (
        <div className="collapsedMenuOption">
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