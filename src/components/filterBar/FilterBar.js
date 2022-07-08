import React, { useState, useEffect } from 'react';
import './styles/FilterBarStyles.css'
import generateFilters from './services/FilterService';

function FilterBar() {

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const generatedFilters = generateFilters();
    setFilters(['All', ...generatedFilters, 'Recently Uploaded', 'Watch Later']);
  }, [])

  return (
    <div className='filterBar'>
      <hr />
      <div className='filterWords'>
        {
          filters.map((filter, index) => {
            return <button className='filterButton' key={index} > {filter} </button>
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default FilterBar;