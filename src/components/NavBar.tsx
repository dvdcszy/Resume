import React from 'react';
import styles from '../Styles/NavBar.module.css';
import '../Styles/icofont.min.css';
import initialsLogo from '../Images/initials.png';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const activeStyle = {
    color: '#e7ff7f',
    textDecoration: 'none',
  };

  return (
    <nav className={styles.navBox}>
      <div id={styles.first}>
        <NavLink to='/'>
          <img id={styles.logo} src={initialsLogo} alt='My logo' />
        </NavLink>
      </div>
      <button className={styles.hamburger}>
        <i className='icofont-navigation-menu'></i>
      </button>
      <div id={styles.second}>
        <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : {})}>
          Home
        </NavLink>
        <NavLink
          to='/about'
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          About
        </NavLink>
        <NavLink
          to='/skillsandtechs'
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <span>Techs</span>
        </NavLink>
        <NavLink
          to='/contactme'
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
