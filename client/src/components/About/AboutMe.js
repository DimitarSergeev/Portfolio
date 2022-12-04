import styles from "./AboutMe.module.css";

export const AboutMe = () => {
    return (
        <article className={styles.container}>
            <div className={styles['left-img']}>
                {/* <img src="/images/me.jpg" alt="nqma" /> */}
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>About Me</h1>
                <div className={styles['info-container']}>
                    <p className={styles.info}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur maxime at sapiente qui eaque? Nisi suscipit quia totam dolor! Tenetur earum rem quis provident recusandae nesciunt possimus illo fuga iusto.
                    </p>

                </div>
            </div>
        </article>
    );
};


