import React from 'react';

const SideMenuContext = React.createContext({
    showMenu: true,
    setShowMenu: () => {}
});

export default SideMenuContext;