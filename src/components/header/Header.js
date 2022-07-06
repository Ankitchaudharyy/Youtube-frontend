import React from 'react';
import './styles/HeaderStyles.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {
  return (
    <div className='header'>
        <div className='headerItems'>
            <DensityMediumIcon className="menuIcon" />
            <img src='/yt_logo.png' height='50px'/>
        </div>
        <div className="searchField">
            <input type="text" placeholder="Search" className="searchBox" /> 
            <SearchIcon className='searchIcon'/>
            <MicIcon className='micIcon' />
        </div>
        <div className='iconMenu'>
            <VideoCallOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 1 }} className="icon" />
            <AppsOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 1 }} className="icon" />
            <NotificationsOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 0.5 }} className="icon" />
            <AccountCircleOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 0.5 }} className="icon" />
        </div>
    </div>
  )
}

export default Header