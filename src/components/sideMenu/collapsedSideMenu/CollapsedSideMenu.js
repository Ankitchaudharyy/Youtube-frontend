import React from 'react';
import {collapsedOptions} from '../menuOptions';
import CollapsedSideMenuOption from './CollapsedSideMenuOption';

function CollapsedSideMenu() {
  return (
    <div>
      {
        collapsedOptions.map((option, index) => {
           return <CollapsedSideMenuOption key={index} text={option[0]} Icon={option[1]} OutlinedIcon={option[2]}/>
        })
      }
    </div>
  )
}

export default CollapsedSideMenu;