import React, { useContext } from 'react';
import './styles/LogoStyles.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Tooltip from '@mui/material/Tooltip';
import SideMenuContext from '../../../context/SideMenuContext';

function Logo() {
    const { showMenu, setShowMenu } = useContext(SideMenuContext)
    
    return (
        <div className='logo'>
            <DensityMediumIcon className="menuIcon" onClick={() => setShowMenu(!showMenu)}/>
            <Tooltip title="Youtube Home" placement="bottom-start">
                <img src='/yt_logo.png' height='50px' />
            </Tooltip>
        </div>
    );
}

export default Logo
