import React, {useState,useEffect} from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [active,setActive] = useState(' ')

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 780) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
    
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} className='logo' />
            </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li key={link.id} onClick={closeMobileMenu} className='nav-item'>
              <a href={`#${link.id}`} className='nav-links'>{link.title}</a>
            </li>
            
          ))}
             <a
                href="#Member"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Become a Member
              </a>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Become a member</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
