import React, { useRef } from 'react';
import './styles/SearchFieldStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';

function SearchField() {
    let navigate = useNavigate();
    const inputRef = useRef('');

    const showSearchResults = () => {
        const inputValue = inputRef.current.value;

        if(inputValue !== '') {
            navigate('/search', {state: {searchText: inputValue}})
        }
    }

    const handleKeyPress = (event) => {
        if (event.key == "Enter") {
            showSearchResults();
        }
    }

    return (
        <div className="searchField">
            <input type="search" placeholder="Search" className="searchBox" ref={inputRef} onKeyPress={handleKeyPress} />
            <Tooltip title="Search" placement="bottom-start">
                <SearchIcon className='searchIcon' onClick={() => showSearchResults()} />
            </Tooltip>
            <Tooltip title="Search with your voice" placement="bottom-start">
                <MicIcon className='micIcon' />
            </Tooltip>
        </div>
    )
}

export default SearchField