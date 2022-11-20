import styles from './Popup.module.css'

export const Popup = ({closePopup}) =>{
    return(
        <div className={styles['card-holder']}>
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.desc}>Your email has been sucessfully submitted.Thanks!</p>
            <button className={styles.btn} onClick={closePopup}>OK</button>
        </div>
    )
}