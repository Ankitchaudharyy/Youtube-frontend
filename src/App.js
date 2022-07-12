import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import { ShowMenuContext } from './context/SideMenuContext';
import SideMenu from './components/sideMenu/SideMenu';
import FilterBar from './components/filterBar/FilterBar';
import styles from './App.module.css';
import { FilterContext } from './context/FilterBarContext';
import Home from './components/home/Home';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [filter, setFilter] = useState('All');

  const preventResizing = (event) => {
    if (window.innerWidth < 1000) {
      setShowMenu(false);
      event.stopImmediatePropagation();
    }
  }
  

  useEffect(() => {
    window.addEventListener('resize', preventResizing)

    return () => window.removeEventListener('resize', preventResizing)
    
  }, [])

  return (
    <div>
      <ShowMenuContext.Provider value={{ showMenu, setShowMenu }} >
        <Header />
        <div className={styles.container}>
          <SideMenu showMenu={showMenu} />
          <FilterContext.Provider value={[filter, setFilter]}>
            <div className={styles.mainBody}>
              <FilterBar />
              <Home />
            </div>
          </FilterContext.Provider>
        </div>
      </ShowMenuContext.Provider>
    </div>
  );
}

export default App;