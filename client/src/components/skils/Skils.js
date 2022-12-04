import styles from './Skils.module.css'

import htmlFront from './certificates/Certificate-HTML&CSS-Front.jpg'
import htmlInfo from './certificates/Certificate-HTML&CSS-Info.jpg'
import jsFundametals from './certificates/Certificate-JS-Fundamentals.jpg'
import jsFundametalsInfo from './certificates/Certificate-JS-Fundamentals-info.jpg'
import reactJs from './certificates/Certificate-ReactJS.jpg'
import reactJsInfo from './certificates/Certificate-ReactJS-info.jpg'
import JSBackEnd from './certificates/Certificate-JS-Back-End.jpg'
import JSBackEndInfo from './certificates/Certificate-JS-Back-End-info.jpg'
import JSApplication from './certificates/Certificate-JS-applications.jpg'
import JSApplicationInfo from './certificates/Certificate-JS-applications-info.jpg'
import JSAdvanced from './certificates/Certificate-JS-Advance.jpg'
import JSAdvancedInfo from './certificates/Certificate-JS-Advance-info.jpg'
import introCyberSecurity from './certificates/Certificate-intro-cyberSecurity.jpg'
import introCyberSecurityInfo from './certificates/Certificate--intro-cyberSecurity-info.jpg'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Skils = () => {
 
    return (


        <section className={styles['card-holder']}>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                zoom={
                    {
                        containerClass: 'img-holder',
                        maxRatio : 3,
                        minRatio: 1,
                        toggle: true,
                        zoomedSlideClass: 'img-holder'
                    }
                }
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-brands fa-html5" style={{ color: '#e54d25' }}></i>
                        <i class="fa-brands fa-css3-alt" style={{ color: '#27a7de' }}></i>
                        <h1 className={styles.title}>HTML&CSS</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={htmlFront} alt="nqma" />
                            <img src={htmlInfo} alt="nqma" />

                        </div>

                    </article>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-brands fa-js" style={{ color: '#feda3d' }}></i>
                        <h1 className={styles.title}>Fundamentals</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={jsFundametals} alt="nqma" />
                            <img src={jsFundametalsInfo} alt="nqma" />
                            {/* <img src={jsFundametalsInfo2} alt="nqma" /> */}
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-brands fa-js" style={{ color: '#feda3d' }}></i>
                        <h1 className={styles.title}>JS Advanced</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={JSAdvanced} alt="nqma" />
                            <img src={JSAdvancedInfo} alt="nqma" />
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-brands fa-js" style={{ color: '#feda3d' }}></i>
                        <h1 className={styles.title}>JS Applications</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={JSApplication} alt="nqma" />
                            <img src={JSApplicationInfo} alt="nqma" />
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-brands fa-react" style={{ color: '#31cddf' }}></i>
                        <h1 className={styles.title}>React JS</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={reactJs} alt="nqma" />
                            <img src={reactJsInfo} alt="nqma" />
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-brands fa-node" style={{ color: '#8cc94a' }}></i>
                        <h1 className={styles.title}>JS Back-End</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={JSBackEnd} alt="nqma" />
                            <img src={JSBackEndInfo} alt="nqma" />
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles['title-holder']}>
                        <i class="fa-solid fa-user-shield" style={{ color: '#179bf1' }}></i>
                        <h1 className={styles.title}>Introduction to Cyber Security</h1>
                    </div>
                    <article className={styles.card}>
                        <div className={styles['img-holder']}>
                            <img src={introCyberSecurity} alt="nqma" />
                            <img src={introCyberSecurityInfo} alt="nqma" />
                        </div>
                    </article>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    );
}
