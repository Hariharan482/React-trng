import React from 'react';
import styles from './header.module.css';
const Header =()=>{
        return(
            <>
                <header className={styles.header}>
                    <div className={styles.logo}><img src = '/assests/logo.png' alt='logo'></img></div>
                    <div className={styles.menu}>
                        <a href='#'>Hotels</a>
                        <a href='#'>Bike Rentals</a>
                        <a href='#'>Restaurants</a>
                    </div>
                </header>
            </>
        );
}

export default Header;