import React from 'react'
import CollapsedSideMenu from './collapsedSideMenu/CollapsedSideMenu';
import ExpandedSideMenu from './expandedSideMenu/ExpandedSideMenu';

function SideMenu({ showMenu }) {
    return (
        <>
            {showMenu ?
                <ExpandedSideMenu />
                :
                <CollapsedSideMenu />
            }
        </>
    );

}

export default SideMenu