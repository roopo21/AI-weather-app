import React from 'react';
import "../styles/components/Header.scss";
import Search from './Search';
import Place from './Place';
import Settings from './Settings';

const Header = () => {
    return (
        <div className='Header'>
            <Place/>
            <Search/>
            <Settings/>

        </div>
    );
}

export default Header;
