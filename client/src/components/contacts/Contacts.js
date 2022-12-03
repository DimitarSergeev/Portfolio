import styles from './Contacts.module.css'

import { useState } from 'react'
import { Popup } from './Popup'

import emailjs from '@emailjs/browser'
export const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({});
    const [showPopup, setShow] = useState(false)

    const changeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const validate = (e) => {
        switch (e.target.name) {
            case 'email':
                setErrors(state => ({
                    ...state,
                    [e.target.name]: !formData.email.match(/^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/)
                }))
                break
            case 'name':
                setErrors(state => ({
                    ...state,
                    'name': formData.name.length < 4
                }))
                break
            case 'message':
                setErrors(state => ({
                    ...state,
                    'message': formData.message.length < 10
                }))
                break

            default: break;
        }
    }
    const sendEmail = (e) => {
        e.preventDefault()
        const noError = Object.values(errors).some(x => x === true)
        const allCorrect = Object.values(formData).some(x => x === '')
        if (!noError && !allCorrect) {
            emailjs.sendForm('service_gfdork8', "template_l6hhoqh", e.target, "eNtpaGvw2XEsZd0by")
            setShow(state => true)
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }
    }

    const closePopup = () => {
        setShow(state => false)
    }
    console.log(showPopup);
    return (


        <section className={styles.section}>
            {showPopup &&

                <Popup closePopup={closePopup}></Popup>
            }
            <div className={styles['contact-container']}>

                <div className={styles['form-container']}>
                    <h3 className={styles.title}>Message Me</h3>
                    <form action="" className={styles['contact-form']} onSubmit={sendEmail} >
                        <div className={styles['input-container']}>
                            <input type="text" name="name" placeholder='Your name' value={formData.name} onChange={changeHandler} onBlur={(e) => validate(e)} />
                            {errors.name &&
                                <div className={styles.icons}>
                                    <div className={styles.tooltip}>Name need to be at least 4 charters</div>
                                    <span><i className="fa-solid fa-circle-xmark red" style={{ color: "red" }}></i></span>
                                </div>
                            }
                            {!errors.name && formData.name.length >= 4 &&
                                <i className="fa-solid fa-circle-check" ></i>
                            }


                        </div>
                        <div className={styles['input-container']}>
                            <input type="email" name="email" placeholder='Enter email...' value={formData.email} onChange={changeHandler} onBlur={(e) => validate(e)} />
                            {errors.email &&
                                <div className={styles.icons}>
                                    <div className={styles.tooltip}>Invalid Email address,try again !</div>
                                    <span><i className="fa-solid fa-circle-xmark red" style={{ color: "red" }}></i></span>
                                </div>
                            }
                            {!errors.email && formData.email.match(/^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/) &&
                                <i className="fa-solid fa-circle-check" ></i>
                            }
                        </div>
                        <div className={styles['input-container']}>
                            <textarea name="message" id="" cols="30" rows="10" placeholder='Write Message...' value={formData.message} onChange={changeHandler} onBlur={(e) => validate(e)}></textarea>
                            {errors.message &&
                                <div className={styles.icons}>
                                    <div className={styles.tooltip}>Message can be ten or more charters</div>
                                    <span><i className="fa-solid fa-circle-xmark red" style={{ color: "red" }}></i></span>
                                </div>
                            }
                            {!errors.message && formData.message.length >= 10 &&
                                <i className="fa-solid fa-circle-check" ></i>
                            }
                        </div>

                        <input type="submit" value='send' className={styles.btn} />

                    </form>
                </div>

                <div className={styles.map}>
                    <iframe
                       title='google-map'
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