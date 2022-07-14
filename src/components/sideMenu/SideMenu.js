import React, { useState } from 'react'
import { SelectedOptionContext } from '../../context/SideMenuContext';
import CollapsedSideMenu from './collapsedSideMenu/CollapsedSideMenu';
import ExpandedSideMenu from './expandedSideMenu/ExpandedSideMenu';
import './styles/SideMenuStyles.css'

const SideMenu = ({ showMenu }) => {
    const [selected, setSelected] = useState("Home");

    const pathname = window.location.pathname;

    return (
        <SelectedOptionContext.Provider value={{ selected, setSelected }}>
            <div className='sideMenu'>
                {showMenu ?
                    <ExpandedSideMenu />
                    :
                    pathname.includes('/video/') ?
                        null : <CollapsedSideMenu /> 
                }
            </div>
        </SelectedOptionContext.Provider>
    );
}

export default SideMenu