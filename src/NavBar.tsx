import React from 'react';
import styles from './styles/nav-bar.module.css';
import './styles/icofont.min.css';

const NavigationBar = () => {


    return (
        <div className={styles.navBox}>
            <div id={styles.first}>    
                <span><i className="icofont-circuit"></i></span>
            </div>
            <div id={styles.second}>
                <span>Home</span>
                <span>About</span>
                <span>Techs</span>
                <span>Contact</span>
            </div>
        </div>
    )
};

export default NavigationBar;