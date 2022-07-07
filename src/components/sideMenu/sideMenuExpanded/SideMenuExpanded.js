import React from 'react'
import { homeOptions, activityOptions } from './menuOptions';
import SideMenuOption from './SideMenuOption';
import './styles/SideMenuExpandedStyles.css';

function SideMenuExpanded() {
    return (
        <div className='sideMenu'>
            {
                homeOptions.map((option, index) => {
                    return <SideMenuOption key={index} text={option[0]} Icon={option[1]} OutlinedIcon={option[2]} />
                })
            }
            <div>
                <hr />
            </div>
            {
                activityOptions.map((option, index) => {
                    return <SideMenuOption key={index} text={option[0]} Icon={option[1]} OutlinedIcon={option[2]} />
                })
            }
        </div>
    );
}

export default SideMenuExpanded