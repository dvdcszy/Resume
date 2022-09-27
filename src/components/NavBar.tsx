import React, { useState } from 'react';
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
      <div id={styles.navBar}>
        <NavLink to='/'>
          <img id={styles.logo} src={initialsLogo} alt='My logo' />
        </NavLink>
        <nav
          className={isNavExpanded ? styles.openNavMenu : styles.closedNavMenu}
        >
          <div id={styles.second}>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setIsNavExpanded(false)}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setIsNavExpanded(false)}
            >
              About
            </NavLink>
            <NavLink
              to='/skillsandtechs'
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setIsNavExpanded(false)}
            >
              <span>Techs</span>
            </NavLink>
            <NavLink
              to='/contactme'
              style={({ isActive }) => (isActive ? activeStyle : {})}
              onClick={() => setIsNavExpanded(false)}
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
      </div>
    </>
  );
};

export default NavigationBar;
