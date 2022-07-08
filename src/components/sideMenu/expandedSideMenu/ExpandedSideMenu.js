import React from 'react'
import { homeOptions, activityOptions, subscriptionOptions, moreOptions, settingOptions } from '../menuOptions';
import ExpandedSideMenuOption from './ExpandedSideMenuOption';
import './styles/ExpandedSideMenuStyles.css';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function ExpandedSideMenu() {

    function mapToJSX(options) {
        return options.map((option, index) => {
            return <ExpandedSideMenuOption key={index} text={option[0]} Icon={option[1]} OutlinedIcon={option[2]} />
        })
    }

    return (
        <div className='expandedSideMenu'>
            {mapToJSX(homeOptions)}
            <div> <hr className="smallLine" /> </div>

            {mapToJSX(activityOptions)}
            <div> <hr className="smallLine" /> </div>

            <h4 > SUBSCRIPTIONS </h4>
            {mapToJSX(subscriptionOptions)}
            <div> <hr className="smallLine" /> </div>

            <h4> MORE FROM YOUTUBE </h4>
            {mapToJSX(moreOptions)}
            <div> <hr className="smallLine" /> </div>

            {mapToJSX(settingOptions)}
            <div> <hr className="smallLine" /> </div>

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

export default ExpandedSideMenu