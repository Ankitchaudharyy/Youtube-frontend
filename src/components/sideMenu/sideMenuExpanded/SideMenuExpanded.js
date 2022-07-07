import React from 'react'
import { homeOptions, activityOptions, subscriptionOptions, moreOptions, settingOptions } from './menuOptions';
import SideMenuOption from './SideMenuOption';
import './styles/SideMenuExpandedStyles.css';

function mapToJSX(options) {
    return options.map((option, index) => {
        return <SideMenuOption key={index} text={option[0]} Icon={option[1]} OutlinedIcon={option[2]} />
    })
}

function SideMenuExpanded() {
    return (
        <div className='sideMenu'>
            {mapToJSX(homeOptions)}
            <div> <hr /> </div>

            {mapToJSX(activityOptions)}
            <div> <hr /> </div>

            <h4 > SUBSCRIPTIONS </h4>
            {mapToJSX(subscriptionOptions)}
            <div> <hr /> </div>

            <h4> MORE FROM YOUTUBE </h4>
            {mapToJSX(moreOptions)}
            <div> <hr /> </div>

            {mapToJSX(settingOptions)}
            <div> <hr /> </div>
        </div>
    );
}

export default SideMenuExpanded