import React, { useEffect } from 'react'
import styles from './Contact.module.css';
import { emailLightIcon, fbLightIcon, githubLightIcon, instagramLightIcon, phoneNumberLightIcon, tiktokLightIcon } from '../../assets';
import { Link } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if(inView){
            controls.start('visible');
        } else{
            controls.start('hidden');
        }
    }, [controls, inView]);

    const githubVariants = {
        hidden: { 
            opacity: 0, 
            x: -100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.5,
                delay: 0.1 
            } 
        },
    };


    const tiktokVariants = {
        hidden: { 
            opacity: 0, 
            x: -100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.5, 
                delay: 0.5 
            } 
        },
    };

    const instagramVariants = {
        hidden: { 
            opacity: 0, 
            x: -100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.5, 
                delay: 0.8 
            } 
        },
    };

    const facebookVariants = {
        hidden: { 
            opacity: 0, 
            x: 100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.5, 
                delay: 0.2 
            } 
        },
    };

    const emailVariants = {
        hidden: { 
            opacity: 0, 
            x: 100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.5, 
                delay: 0.5 
            } 
        },
    };

    const phoneVariants = {
        hidden: { 
            opacity: 0, 
            x: 100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.5, 
                delay: 0.8 
            } 
        },
    };



    const topVariants = {
        hidden: { 
            opacity: 0, 
            y: -100 
        },
        visible: {
            opacity: 1, 
            y: 0, 
            transition: {duration: 0.5} 
        },
    };

  return (
    <motion.div className={styles.contact}
    ref={ref}
    initial='hidden'
    animate={controls}
    variants={{
        hidden: {},
        visible: {
            transition: {staggerChildren: 0.2}
        },
    }}
    >
        <div className={styles.contactHeader}>
            <motion.h4 variants={topVariants}>Contact</motion.h4>
        </div>
        <div className={styles.contactContent}>
            <div className={styles.contactLeft}>
                <div className={styles.contactLinks}>
                    <motion.div className={styles.contactLink} variants={githubVariants}>
                        <Link to='https://github.com/greendeeroper444' target='_blank'>
                        <img src={githubLightIcon} alt="GitHub" />
                        <span>Visit my GitHub</span>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.contactLink} variants={tiktokVariants}>
                        <Link to='https://www.tiktok.com/@greendzyberde?lang=en' target='_blank'>
                        <img src={tiktokLightIcon} alt="TikTok" />
                        <span>Visit my TikTok</span>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.contactLink} variants={instagramVariants}>
                        <Link to='https://www.instagram.com/greendeeroper?igsh=MXRnbTU0azRoNHVzdg==' target='_blank'>
                        <img src={instagramLightIcon} alt="Instagram" />
                        <span>Visit my instagram</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className={styles.contactRight}>
                <div className={styles.contactLinks}>
                    <motion.div className={styles.contactLink} variants={facebookVariants}>
                        <Link to='https://www.facebook.com/greendee.roper' target='_blank'>
                        <img src={fbLightIcon} alt="Facebook" />
                        <span>Contact me via Facebook</span>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.contactLink} variants={emailVariants}>
                        <Link to='mailto:greendeeroperpanogalon@gmail.com' target='_blank'>
                        <img src={emailLightIcon} alt="Email" />
                        <span>Contact me via Email</span>
                        </Link>
                    </motion.div>
                    <motion.div className={styles.contactLink} variants={phoneVariants}>
                        <Link to='tel:+639168309254' target='_blank'>
                        <img src={phoneNumberLightIcon} alt="Phone Number" />
                        <span>Contact me via Phone Number</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact
