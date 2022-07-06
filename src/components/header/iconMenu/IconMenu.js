import React from 'react';
import './styles/IconMenuStyles.css';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Tooltip from '@mui/material/Tooltip';

function IconMenu() {
    return (
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
    )
}

export default IconMenu