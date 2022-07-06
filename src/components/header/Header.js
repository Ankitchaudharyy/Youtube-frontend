import React from 'react';
import './styles/HeaderStyles.css';
import Logo from './logo/Logo';
import SearchField from './searchField/SearchField';
import IconMenu from './iconMenu/IconMenu';

const Header = React.memo(() => {
    return (
        <div className='header'>
            <Logo />
            <SearchField />
            <IconMenu />
        </div>
    )
});

export default Header