import React from 'react';

const SideMenuContext = React.createContext({
    showMenu: true,
    setShowMenu: () => { }
});

const SelectedOptionContext = React.createContext({
    selected: 'Home',
    setSelected: () => { }
})

export { SideMenuContext, SelectedOptionContext} ;