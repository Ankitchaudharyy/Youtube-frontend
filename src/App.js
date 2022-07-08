import Header from './components/header/Header';
import { useState } from 'react';
import { ShowMenuContext } from './context/SideMenuContext';
import SideMenu from './components/sideMenu/SideMenu';
import FilterBar from './components/filterBar/FilterBar';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <ShowMenuContext.Provider value={{ showMenu, setShowMenu }} >
        <Header />
      </ShowMenuContext.Provider>
      <div className="container">
        <SideMenu showMenu={showMenu} /> 
        <div className="mainBody">
          <FilterBar />
        </div>
      </div>
    </div>
  );
}

export default App;