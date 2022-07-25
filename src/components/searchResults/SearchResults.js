import React from 'react'
import { useLocation } from 'react-router'

function SearchResults() {
  const searchText = useLocation().state.searchText;
  
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults