import React from 'react';
import './styles/SearchFieldStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Tooltip from '@mui/material/Tooltip';

function SearchField() {
    return (
        <div className="searchField">
            <input type="search" placeholder="Search" className="searchBox" />
            <Tooltip title="Search" placement="bottom-start">
                <SearchIcon className='searchIcon' />
            </Tooltip>
            <Tooltip title="Search with your voice" placement="bottom-start">
                <MicIcon className='micIcon' />
            </Tooltip>
        </div>
    )
}

export default SearchField