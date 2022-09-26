import React, { useState, useRef } from 'react';
import styles from '../Styles/NavBar.module.css';
import '../Styles/icofont.min.css';
import initialsLogo from '../Images/initials.png';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const activeStyle = {
    color: '#e7ff7f',
    textDecoration: 'none',
  };
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

  const toggleButtonClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <>
      <nav
        className={isNavExpanded ? styles.openNavMenu : styles.closedNavMenu}
      >
        <div id={styles.first}>
          <NavLink to='/'>
            <img id={styles.logo} src={initialsLogo} alt='My logo' />
          </NavLink>
        </div>
        <div id={styles.second}>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : {})}
            onClick={() => toggleButtonClick()}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            style={({ isActive }) => (isActive ? activeStyle : {})}
            onClick={() => toggleButtonClick()}
          >
            About
          </NavLink>
          <NavLink
            to='/skillsandtechs'
            style={({ isActive }) => (isActive ? activeStyle : {})}
            onClick={() => toggleButtonClick()}
          >
            <span>Techs</span>
          </NavLink>
          <NavLink
            to='/contactme'
            style={({ isActive }) => (isActive ? activeStyle : {})}
            onClick={() => toggleButtonClick()}
          >
            <span>Contact</span>
          </NavLink>
          <button
            className={styles.hamburger}
            onClick={() => toggleButtonClick()}
          >
            <i
              className={
                isNavExpanded ? 'icofont-ui-close' : 'icofont-navigation-menu'
              }
            ></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
