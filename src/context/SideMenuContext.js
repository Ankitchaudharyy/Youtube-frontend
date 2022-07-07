import React from 'react';

const ShowMenuContext = React.createContext({
    showMenu: true,
    setShowMenu: () => { }
});

const SelectedOptionContext = React.createContext({
    selected: 'Home',
    setSelected: () => { }
})

export { ShowMenuContext, SelectedOptionContext} ;