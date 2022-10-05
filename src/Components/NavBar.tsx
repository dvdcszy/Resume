import React, { useRef } from 'react';
import '../Styles/NavBar.module.css';
import '../Styles/icofont.min.css';
import initialsLogo from '../Images/initials.png';

import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const navBurgerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const toggleBurger = () => {
    navBurgerRef.current.classList.toggle('is-active');
    navRef.current.classList.toggle('is-active');
  };
  const closeNavmenu = () => {
    const hasClassIsActive = navRef.current.classList.contains('is-active');
    const hasClassIsActiveBurger =
      navBurgerRef.current.classList.contains('is-active');
    if (hasClassIsActive) navRef.current.classList.remove('is-active');
    if (hasClassIsActiveBurger)
      navBurgerRef.current.classList.remove('is-active');
  };
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <img src={initialsLogo} alt='My logo' />
        </a>
        <div
          ref={navBurgerRef}
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
            <NavLink to='/' onClick={() => closeNavmenu()}>
              Home
            </NavLink>
            <NavLink to='/about' onClick={() => closeNavmenu()}>
              About
            </NavLink>
            <NavLink to='/skillsandtechs' onClick={() => closeNavmenu()}>
              Skills
            </NavLink>
            <NavLink to='/contactme' onClick={() => closeNavmenu()}>
              Contact me
            </NavLink>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
