import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';
import myPicture from '../../assets/greendee.png';
import { emailLightIcon, fbLightIcon, instagramLightIcon, mapLightIcon, tiktokLightIcon } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Link} from 'react-router-dom'
import cvPdf from '../../assets/cv/greendeeCvResume.pdf';
import HomeTextSpanFramerMotion from '../../helpers/HomeTextSpanFramerMotion';


function Home({handleScroll}) {
    const [text, setText] = useState('');
    const initialText = 'I am a';
    const roles = [' Full Stack Developer', ' Virtual Assistant', ' MERN Stack Developer', ' Portrait Maker'];
    const typingDelay = 150;
    const loopDelay = 2000;
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

    const leftVariants = {
        hidden: { 
            opacity: 0, 
            x: -100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {duration: 0.5} 
        },
    };

    const rightVariants = {
        hidden: { 
            opacity: 0, 
            x: 100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {duration: 0.5} 
        },
    };

    const topSlantingVariants = {
        hidden: { 
            opacity: 0, 
            y: -60,
            x: -30
        },
        visible: {
            opacity: 1, 
            y: 0, 
            x: 0,
            transition: {duration: 0.5} 
        },
    };

    const bottomVariants = {
        hidden: { 
            opacity: 0, 
            y: 100 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: {duration: 0.5} 
        },
    };

    useEffect(() => {
        let roleIndex = 0;
        let index = 0;
        let isDeleting = false;
        let typingTimeout;

        const type = () => {
            const currentRole = roles[roleIndex];
            const fullText = initialText + currentRole;

            if(isDeleting){
                if (index === 0){
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    typingTimeout = setTimeout(type, loopDelay);
                } else{
                    setText(fullText.substring(0, index - 1));
                    index--;
                    typingTimeout = setTimeout(type, typingDelay);
                }
            } else{
                if(index === fullText.length){
                    isDeleting = true;
                    typingTimeout = setTimeout(type, loopDelay);
                } else{
                    setText(fullText.substring(0, index + 1));
                    index++;
                    typingTimeout = setTimeout(type, typingDelay);
                }
            }
        };

        typingTimeout = setTimeout(type, typingDelay);

        return () => clearTimeout(typingTimeout);
    }, []);

    const helloWorldText = "Hello World! My name is".split("");
    const nameText = "Greendee Roper".split("");
    const lastNameText = " Panogalon,".split("");
    const dynamicText = text.slice(0, initialText.length).split("");
    const positionText = text.slice(initialText.length).split("");
    
  return (
    <motion.div 
    className={styles.home}
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
        <div className={styles.homeContent}>
            <br />
            <motion.div className={styles.homeLeft} variants={topSlantingVariants}>
                <motion.div className={styles.homeLeftContent} variants={leftVariants}>
                    <motion.img variants={leftVariants} src={myPicture} alt='Profile' className={styles.profilePicture} />
                </motion.div>
            </motion.div>
            <div className={styles.homeRight}>
                <br />
                <motion.div className={styles.homeRightContent} variants={rightVariants}>
                    {
                        helloWorldText.map((char, index) => (
                            <HomeTextSpanFramerMotion key={`hello-${index}`} className={styles.textSpanAnimated}>
                                <span className={styles.helloWorld}>{char === ' ' ? '\u00A0' : char}</span>
                            </HomeTextSpanFramerMotion>
                        ))
                    }
                    <br />
                    {
                        nameText.map((char, index) => (
                            <HomeTextSpanFramerMotion key={`name-${index}`} className={styles.textSpanAnimated}>
                                <span className={styles.greenTextName}>{char === ' ' ? '\u00A0' : char}</span>
                            </HomeTextSpanFramerMotion>
                        ))
                    }
                    {
                        lastNameText.map((char, index) => (
                            <HomeTextSpanFramerMotion key={`lastName-${index}`} className={styles.textSpanAnimated}>
                                <span className={styles.greenTextName}>{char === ' ' ? '\u00A0' : char}</span>
                            </HomeTextSpanFramerMotion>
                        ))
                    }
                    <br />
                    {
                        dynamicText.map((char, index) => (
                            <HomeTextSpanFramerMotion key={`dynamic-${index}`} className={styles.textSpanAnimated}>
                                <span className={styles.whiteText}>{char === ' ' ? '\u00A0' : char}</span>
                            </HomeTextSpanFramerMotion>
                        ))
                    }
                    {
                        positionText.map((char, index) => (
                            <HomeTextSpanFramerMotion key={`dynamic-${index}`} className={styles.textSpanAnimated}>
                                <span className={styles.greenTextPosition}>{char === ' ' ? '\u00A0' : char}</span>
                            </HomeTextSpanFramerMotion>
                        ))
                    }
                </motion.div>
                <br />
                <motion.div className={styles.homeRightContentBottom} variants={bottomVariants}>
                    <div className={styles.motto}>
                        <i>
                            &ldquo;Don&apos;t worry about your problems,  <br />
                            Let your problems worry about you.&rdquo;
                        </i>
                    </div>

                    <div className={styles.homeContactMe}>
                        <Link to='https://www.google.com/maps/place/Mabuhay,+Carmen,+Davao+del+Norte/@7.3831995,125.6202528,14z/data=!3m1!4b1!4m6!3m5!1s0x32f94927b799b8ad:0x16f55e5a7e47b802!8m2!3d7.3837779!4d125.6396194!16s%2Fg%2F11fyxf3cml?entry=ttu' target='_blank'><img src={mapLightIcon} alt="Mail Icon" /></Link>
                        <Link to='https://www.facebook.com/greendee.roper' target='_blank'><img src={fbLightIcon} alt="Facebook Icon" /></Link>
                        <Link to='https://www.tiktok.com/@greendzyberde?lang=en' target='_blank'><img src={tiktokLightIcon} alt="Tiktok Icon" /></Link>
                        <Link to='https://www.instagram.com/greendeeroper?igsh=MXRnbTU0azRoNHVzdg==' target='_blank'><img src={instagramLightIcon} alt="Instagram Icon" /></Link>
                        <Link to='mailto:greendeeroperpanogalon@gmail.com' target='_blank'><img src={emailLightIcon} alt="Mail Icon" /></Link>
                    </div>
                    <div className={styles.downloadContact}>
                       <motion.span variants={leftVariants}> <a href={cvPdf} download className={styles.downloadCv}>Download CV</a></motion.span>
                       <motion.span variants={rightVariants}><Link to='#contact-main-container' onClick={(e) => handleScroll(e, 'contact-main-container')} className={styles.contactMe}>Contact Me</Link></motion.span>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default Home