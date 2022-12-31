import styles from "./AboutMe.module.css";

import imgMe from './IMG_20210616_220717-removebg-preview.png'
import CV from './DimitarResume.pdf'
import {Link} from 'react-router-dom'

export const AboutMe = () => {
    return (
        <>
        <article className={styles.container}>
            <div className={styles['left-img']}>
                <img src={imgMe} alt="nqma" />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>About Me</h2>
                <div className={styles['info-container']}>
                    
                    <p className={styles.info}>
                        Hello, my name is Dimitar Sergeev from <span className={styles.country}>Stara Zagora, Bulgaria</span> and I am 23 years old.
                        I am a beginner looking for a job as a <span className={styles.work}>Front-End developer.</span>
                    </p>
                    <p className={styles.info}>
                         I have taken several courses that you can see <Link to='/skils' className={styles.link}>here</Link> , I am currently studying cyber security and improving my English.
                         Until now, I have experience as customer support and online sales.
                    </p>
                </div>
            </div>
        </article>
         <div className={styles['more-info']}>
                <h1 className={styles['link-title']}>Additional Links</h1>
                <div className={styles.buttons}>
                     <a href={CV}  download className={styles['btn']}>Download CV</a>
                     <Link to='/contacts' className={styles['btn']}>Contacts</Link>
                </div>
         </div>
        </>
    );
};


