import React, { useRef } from 'react';
import '../Styles/NavBar.module.css';
import '../Styles/icofont.min.css';
import initialsLogo from '../Images/initials.png';

import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const toggleBurger = () => {
    navRef.current.classList.toggle('is-active');
  };
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <img src={initialsLogo} alt='My logo' />
        </a>
        <div
          ref={navRef}
          className='navbar-burger'
          onClick={() => toggleBurger()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div ref={navRef} className='navbar-menu' id='nav-links'>
        <div className='navbar-end'>
          <a className='navbar-item'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/skillsandtechs'>Skills</NavLink>
            <NavLink to='/contactme'>Contact</NavLink>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
