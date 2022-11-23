import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className='header-div'>
            <Link to={"/stocks"}>
              <div className='header-item'>Stocks</div>
            </Link>
            <Link to={"/stocks/new"}>
              <div className='header-item'>ADD-STOCK</div>
            </Link>
            <div className='header-item'>Logout</div>
        </div>
    )
}

export default Header;