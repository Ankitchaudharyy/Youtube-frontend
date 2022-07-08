import React, { useState } from 'react'
import { SelectedOptionContext } from '../../context/SideMenuContext';
import CollapsedSideMenu from './collapsedSideMenu/CollapsedSideMenu';
import ExpandedSideMenu from './expandedSideMenu/ExpandedSideMenu';
import './styles/SideMenuStyles.css'

function SideMenu({ showMenu }) {

    const [selected, setSelected] = useState("Home");

    return (
        <SelectedOptionContext.Provider value={{ selected, setSelected }}>
            <div className='sideMenu'>
                {showMenu ?
                    <ExpandedSideMenu />
                    :
                    <CollapsedSideMenu />
                }
            </div>
        </SelectedOptionContext.Provider>
    );

}

export default SideMenu