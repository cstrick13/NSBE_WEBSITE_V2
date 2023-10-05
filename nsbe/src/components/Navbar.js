import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [active,setActive] = useState(' ')
    const closeMobileMenu = () => setClick(false);
    
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                <img src={logo} className="logo" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li key={link.id}
            onClick={closeMobileMenu}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
