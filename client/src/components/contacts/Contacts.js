import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <section className={styles.section}>
            <div className={styles['contact-container']}>

                <div className={styles['form-container']}>
                <h3 className={styles.title}>Message Me</h3>
                <form action="" className={styles['contact-form']}>
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Enter email...' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Write Message...'></textarea>
                    <input type="submit" value='send' className={styles.btn} />
                </form>
                </div>

            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47127.38932639376!2d25.588250763448862!3d42.41790360113956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8690b30e83935%3A0x74baed1462879fb1!2z0KHRgtCw0YDQsCDQl9Cw0LPQvtGA0LA!5e0!3m2!1sbg!2sbg!4v1668934149599!5m2!1sbg!2sbg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
        </section>
    )
}