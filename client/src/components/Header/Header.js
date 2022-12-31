import styles from './Header.module.css'

import { NavLink } from 'react-router-dom'
import { useState } from 'react';

export const Header = () => {

    const [isClicked, setClick] = useState(false)

    const Click = (e) => {
        if (!isClicked) {
            setClick(state => true)
        } else {
            setClick(state => false)
        }
    }
    return (
        <header>
            <nav>
                <div className={styles['top-content']}>
                    <NavLink to='/'>
                        <img src="/logo.png" alt="logo" />
                    </NavLink>
                    {isClicked
                        ? <i className="fa-solid fa-bars" onClick={Click}></i>
                        : <i className="fa-solid fa-x" onClick={Click}></i>
                    }

                </div>
                <ul className={(isClicked ? styles.hiden : styles.navigation)}  >
                    <li className={styles['nav-item']}>
                        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.link)}>
                            <i className="fa-solid fa-house-user"></i>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles['nav-item']}>
                        <NavLink to='/skils' className={({ isActive }) => (isActive ? styles.active : styles.link)}>
                            <i className="fa-solid fa-file-code"></i>
                            Skills
                        </NavLink>
                    </li>
                    <li className={styles['nav-item']}>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : styles.link)}>
                            <i className="fa-solid fa-address-card"></i>
                            About Me
                        </NavLink>
                    </li>
                    <li className={styles['nav-item']}>
                        <NavLink to='/contacts' className={({ isActive }) => (isActive ? styles.active : styles.link)}>
                            <i className="fa-sharp fa-solid fa-envelope-open-text"></i>
                            Contacts
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    );
}