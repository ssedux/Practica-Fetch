import React from 'react';
import './Nav.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="/">Inicio</a></li>
                <li><a href="/dragon">DragonBall</a></li>
                <li><a href="/morty">Rick y Morty</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
