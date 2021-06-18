import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className="container">
                <div className="nav-wrapper">
                    <NavLink to='/' className="brand-logo">Rick And Morty API</NavLink>
                    <ul className="nav-list">
                        <li><NavLink className='nav-list-item' to='/' >Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
