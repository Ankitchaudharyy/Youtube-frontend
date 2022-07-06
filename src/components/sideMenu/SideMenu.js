import React from 'react'

function SideMenu({ showMenu }) {
    return (
        <>
            {showMenu ? <div>SideMenu</div> : <div> df </div>} 
        </>
    );

}

export default SideMenu