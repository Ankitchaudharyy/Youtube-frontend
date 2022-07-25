import React, { useContext } from 'react';
import './styles/LogoStyles.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Tooltip from '@mui/material/Tooltip';
import { ShowMenuContext } from '../../../context/SideMenuContext';
import { useNavigate } from 'react-router';

function Logo() {
    const { showMenu, setShowMenu } = useContext(ShowMenuContext);
    let navigate = useNavigate();

    const navigateToHomePage = () => navigate('/Youtube-frontend');
    
    return (
        <div className='logo'>
            <DensityMediumIcon className="menuIcon" onClick={() => setShowMenu(!showMenu)} />
            <Tooltip title="Youtube Home" placement="bottom-end">
                <img src={process.env.PUBLIC_URL + '/yt_logo.png'} height='50px' alt="logo" onClick={navigateToHomePage}/>
            </Tooltip>
        </div>
    );
}

export default Logo

