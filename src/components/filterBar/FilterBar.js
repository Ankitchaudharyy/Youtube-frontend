import React, { useState, useEffect, useContext } from 'react';
import './styles/FilterBarStyles.css'
import generateFilters from './services/FilterService';
import { ShowMenuContext } from '../../context/SideMenuContext';

function FilterBar() {

  const [filters, setFilters] = useState([]);

  const { showMenu, } = useContext(ShowMenuContext);

  useEffect(() => {
    const generatedFilters = generateFilters();
    setFilters(['All', ...generatedFilters, 'Recently Uploaded', 'Watch Later']);
  }, [])

  return (
    <div className='filterBar'>
      <hr className='line'/>
      <div className={`filterWords `.concat(showMenu ? 'filterWordsCollapsed' : 'filterWordsExpanded')}>
        {
          filters.map((filter, index) => {
            return <button className='filterButton' key={index} > {filter} </button>
          })
        }
      </div>
      <hr className='line'/>
    </div>
  )
}

export default FilterBar;