import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <ul className={styles.links}>
            <li className={styles.link}>
                <a href="https://github.com/DimitarSergeev">
                    <i className="fa-brands fa-github"></i>
                </a>



                <a href="https://www.linkedin.com/in/dimitar-sergeev-107bb2228/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://www.instagram.com/sergeev_9898/">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>

        </ul>
    )
}