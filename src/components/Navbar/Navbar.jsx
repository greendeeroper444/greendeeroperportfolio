import React from 'react'
import styles from './Navbar.module.css';
import { letterG, menu } from '../../assets';

function Navbar({toggleSidebar}) {
  
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
            <div className={styles.menuButton} onClick={toggleSidebar}>
                <img src={menu} alt="" className={styles.menu} />
            </div>
            <div className={styles.logoContainer}>
                <img src={letterG} alt='Logo' className={styles.logo} />
                <h1>Greendee</h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
