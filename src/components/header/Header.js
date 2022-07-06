import React from 'react';
import './styles/HeaderStyles.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Tooltip from '@mui/material/Tooltip';

function Header() {
    return (
        <div className='header'>
            <div className='headerItems'>
                <DensityMediumIcon className="menuIcon" />
                <Tooltip title="Youtube Home" placement="bottom-start">
                    <img src='/yt_logo.png' height='50px' />
                </Tooltip>
            </div>
            <div className="searchField">
                <input type="text" placeholder="Search" className="searchBox" />
                <Tooltip title="Search" placement="bottom-start">
                    <SearchIcon className='searchIcon' />
                </Tooltip>
                <Tooltip title="Search with your voice" placement="bottom-start">
                    <MicIcon className='micIcon' />
                </Tooltip>
            </div>
            <div className='iconMenu'>
                <Tooltip title="Create" placement="bottom-start">
                    <VideoCallOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 1 }} className="icon" />
                </Tooltip>
                <Tooltip title="Youtube Apps" placement="bottom-start">
                    <AppsOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 1 }} className="icon" />
                </Tooltip>
                <Tooltip title="Notifications" placement="bottom-start">
                    <NotificationsOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 0.5 }} className="icon" />
                </Tooltip>
                <AccountCircleOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 0.5 }} className="icon" />
            </div>
        </div>
    )
}

export default Header