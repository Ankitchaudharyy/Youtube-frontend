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
      {
        filters.map((filter, index) => {
          return <span key={index} > {filter} </span>
        })
      }
      <hr />
    </div>
  )
}

export default FilterBar;