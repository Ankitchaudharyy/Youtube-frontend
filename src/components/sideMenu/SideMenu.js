import React, { useState } from 'react'
import { SelectedOptionContext } from '../../context/SideMenuContext';
import CollapsedSideMenu from './collapsedSideMenu/CollapsedSideMenu';
import ExpandedSideMenu from './expandedSideMenu/ExpandedSideMenu';

function SideMenu({ showMenu }) {

    const [selected, setSelected] = useState("Home");

    return (
        <SelectedOptionContext.Provider value={{ selected, setSelected }}>
            {showMenu ?
                <ExpandedSideMenu />
                :
                <CollapsedSideMenu />
            }
        </SelectedOptionContext.Provider>
    );

}

export default SideMenu