import React from 'react';
import './styles/HeaderStyles.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function Header() {
  return (
    <div className='header'>
        <div className='headerItems'>
            <DensityMediumIcon className="menuIcon" />
            <img src='/yt_logo.png' height='50px'/>
        </div>
        <div className="headerItems">
            <input type="text" placeholder="Search" className="searchBox" /> 
            <SearchIcon className='searchIcon'/>
            <MicIcon className='micIcon' />
        </div>
    </div>
  )
}

export default Header