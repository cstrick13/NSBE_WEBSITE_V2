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
  const memberForm = () => {
    window.location.href = "https://forms.gle/K4ZywxvyU5Gxvech8";
  };


  const showButton = () => {
    if (window.innerWidth <= 1345) {
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
            <li key={link.id} onClick={closeMobileMenu} className={`${ active === link.title ? 'nav-item ' :"text-slate-300"}`}>
              <a href={`#${link.id}`} onClick={link.onclick} className='nav-links'>{link.title}</a>
            </li>
            
          ))}
             <a
                href="#Member"
                className='nav-links-mobile'
                onClick={memberForm}
              >
                Become a Member
              </a>
        </ul>
        {button && <Button onClick={memberForm} buttonStyle='btn--outline'>Become a member</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
