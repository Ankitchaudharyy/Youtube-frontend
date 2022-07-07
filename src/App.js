import Header from './components/header/Header';
import './App.css';
import { useState } from 'react';
import { ShowMenuContext } from './context/SideMenuContext';
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <ShowMenuContext.Provider value={{ showMenu, setShowMenu }} >
        <Header />
      </ShowMenuContext.Provider>
      <SideMenu showMenu={showMenu} />
    </div>
  );
}

export default App;