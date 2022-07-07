import React from 'react'
import ExpandedSideMenu from './expandedSideMenu/ExpandedSideMenu';

function SideMenu({ showMenu }) {
    return (
        <>
            {showMenu ?
                <ExpandedSideMenu />
                :
                <div> df </div>
            }
        </>
    );

}

export default SideMenu