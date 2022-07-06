import React from 'react';
import './styles/LogoStyles.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Tooltip from '@mui/material/Tooltip';

function Logo() {
    return (
        <div className='logo'>
            <DensityMediumIcon className="menuIcon" />
            <Tooltip title="Youtube Home" placement="bottom-start">
                <img src='/yt_logo.png' height='50px' />
            </Tooltip>
        </div>
    );
}

export default Logo