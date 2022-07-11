import Header from './components/header/Header';
import { useState } from 'react';
import { ShowMenuContext } from './context/SideMenuContext';
import SideMenu from './components/sideMenu/SideMenu';
import FilterBar from './components/filterBar/FilterBar';
import styles from './App.module.css';
import { FilterContext } from './context/FilterBarContext';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [filter, setFilter] = useState('All');

  return (
    <div>
      <ShowMenuContext.Provider value={{ showMenu, setShowMenu }} >
        <Header />
        <div className={styles.container}>
          <SideMenu showMenu={showMenu} />
          <FilterContext.Provider value={[ filter, setFilter ]}>
            <div className={styles.mainBody}>
              <FilterBar />
            </div>
          </FilterContext.Provider>
        </div>
      </ShowMenuContext.Provider>
    </div>
  );
}

export default App;