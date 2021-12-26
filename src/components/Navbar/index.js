import React, {useState} from 'react';
import './Navbar.css';
import {FiMenu, FiX} from 'react-icons/fi';
import {navbarLinks} from './__mock__';


const Navbar = () => {
    const [navMenuClicked, setNavMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setNavMenuClicked(!navMenuClicked);
    };
    return (
        <nav className="navbar">
            <span className="navbar__logo">Junior project</span>
            {
                !navMenuClicked ?
                    <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick}/> :
                    <FiX size={25} className="navbar__menu" onClick={toggleMenuClick}/>
            }
            <ul className={!navMenuClicked ? 'navbar__list': 'navbar__list navbar__list--active'}>
                {
                    navbarLinks.map(({src, title}) => (
                        <li className="navbar__item" key={title}>
                            <a className="navbar__link" href={src}>{title}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;
