import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.hero}>

            <div className={styles['info-container']}>
                <h2 className={styles.title}>HELLO</h2>
                <h1 className={styles.title2}>I'm Dimitar Sergeev</h1>
                <p className={styles.info}>
                    I have been programming for about a year and a half. I am interested in working with <span>React</span> and <span>Front-End</span> in general.
                </p>
            </div>

        </section>

    );
}

