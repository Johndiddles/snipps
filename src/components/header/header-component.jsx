import React from 'react';
import './header-styles.scss';


function Header () {
    return (
        <>
            <div className='header'>
                <input type='text' className='search-box' />
                <div className="menu-icon">
                    |||
                </div>
            </div>

        </>
    )
}

export default Header;