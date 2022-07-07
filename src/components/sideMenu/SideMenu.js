import React from 'react'
import SideMenuExpanded from './sideMenuExpanded/SideMenuExpanded';

function SideMenu({ showMenu }) {
    return (
        <>
            {showMenu ?
                <SideMenuExpanded />
                :
                <div> df </div>
            }
        </>
    );

}

export default SideMenu