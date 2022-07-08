import React, { useState, useEffect, useContext } from 'react';
import './styles/FilterBarStyles.css'
import generateFilters from './services/FilterService';
import { ShowMenuContext } from '../../context/SideMenuContext';
import { FilterContext } from '../../context/FilterBarContext';

function FilterBar() {

  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSeledtedFilter] = useContext(FilterContext);

  const { showMenu, } = useContext(ShowMenuContext);

  useEffect(() => {
    const generatedFilters = generateFilters();
    setFilters(['All', ...generatedFilters, 'Recently Uploaded', 'Watch Later']);
  }, [])

  return (
    <div className='filterBar'>
      <hr className='line' />
      <div className={`filterWords `.concat(showMenu ? 'filterWordsCollapsed' : 'filterWordsExpanded')}>
        {
          filters.map((filter, index) => {
            return <button
              key={index}
              onClick={() => setSeledtedFilter(filter)}
              className={`filterButton `.concat(selectedFilter === filter ? "selectedFilter" : "")}
            >
              {filter}
            </button>
          })
        }
      </div>
      <hr className='line' />
    </div>
  )
}

export default FilterBar;