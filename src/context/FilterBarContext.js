import React from 'react';

const FilterContext = React.createContext({
    filter: 'All',
    setFilter: () => {}
});

export { FilterContext }