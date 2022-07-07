import React, { useState } from 'react'
import { homeOptions, activityOptions, subscriptionOptions, moreOptions, settingOptions } from './menuOptions';
import SideMenuOption from './SideMenuOption';
import './styles/SideMenuExpandedStyles.css';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function SideMenuExpanded() {

    const [selected, setSelected] = useState("Home");
    console.log(selected)

    function mapToJSX(options) {
        return options.map((option, index) => {
            return <SideMenuOption key={index} text={option[0]} Icon={option[1]} OutlinedIcon={option[2]} selected={selected} setSelected={setSelected}/>
        })
    }

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

            <div className='lastOptions'>
                About
                Press
                Copyright
            </div>
            <div className='lastOptions'>
                Contact
                Creators
                <br />
                Advertise
                Developers
            </div>
            <br />
            <div className='lastOptions'>
                Terms
                Privacy
                <br />
                Policy and Safety
            </div>
            <br />
            <div className='lastOptions'>
                How Youtube works
                <br />
                Test new features
            </div>
            <br />
            <div className='lastOptions'>
                <span>
                    <CopyrightOutlinedIcon fontSize="smaller" />
                    &nbsp; 2022 Google LLC
                </span>
            </div>
        </div>
    );
}

export default SideMenuExpanded