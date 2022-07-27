import React from 'react';
import styles from '../Styles/nav-bar.module.css';
import '../Styles/icofont.min.css';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const activeStyle = {
    color: '#e7ff7f',
    textDecoration: 'none',
  };

  return (
    <div className={styles.navBox}>
      <div id={styles.first}>
        <NavLink to='/'>
          <span>
            <i className='icofont-circuit'></i>
          </span>
        </NavLink>
      </div>
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
    </div>
  );
};

export default NavigationBar;
