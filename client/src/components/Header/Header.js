import styles from './Header.module.css'

import {NavLink} from 'react-router-dom'

export const Header = () =>{
    return(
       <header>
        <nav>
            <NavLink to='/'>
                <img src="/logo.png" alt="logo" />
            </NavLink>
            <ul className={styles.navigation}>
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