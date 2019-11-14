import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onChange, hideInput }) => (
    <div className='header'>
        <Link to='/'>
            <span className='header-link'>
                CINEMA
            </span>
        </Link>

        {hideInput && <label>
            Search Movies
            <input
                className='search'
                type='text'
                onChange={(e) => onChange(e.target.value.trim())}
            />
        </label>}
    </div>
);

export default Header;
