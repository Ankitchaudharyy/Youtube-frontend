import Header from './components/header/Header';
import './App.css';
import { useState } from 'react';
import { SideMenuContext } from './context/SideMenuContext';
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <SideMenuContext.Provider value={{ showMenu, setShowMenu }} >
        <Header />
      </SideMenuContext.Provider>
      <SideMenu showMenu={showMenu} />
    </div>
  );
}

export default App;