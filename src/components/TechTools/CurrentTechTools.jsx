import React, { useEffect } from 'react'
import { css, expressjs, mongodb, nodejs, reactjs, bootstrap, visualstudio, laravel, vue, tailwind, postman } from '../../assets';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './TechTools.module.css';

function CurrentTechTools() {
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

    const zoomInVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8 
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: {duration: 0.5} 
        },
    };

  return (
    <motion.div className={styles.techIcons}
    ref={ref}
    initial='hidden'
    animate={controls}
    variants={{
        hidden: {},
        visible: {transition: {staggerChildren: 0.2}},
    }}
    >
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={mongodb} alt="MongoDB" /><span>MongoDB</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={expressjs} alt="ExpressJS" /><span>ExpressJS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={reactjs} alt="ReactJS" /><span>ReactJS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={nodejs} alt="NodeJS" /><span>NodeJS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={reactjs} alt="React Native" /><span>React Native</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={css} alt="CSS" /><span>CSS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={bootstrap} alt="Bootstrap" /><span>Bootstrap</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={postman} alt="Postman" /><span>Postman</span></motion.div>
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={laravel} alt="Laravel" /><span>Laravel</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={vue} alt="Vue" /><span>Vue</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={tailwind} alt="Tailwind" /><span>Tailwind</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={visualstudio} alt="Visual Studio Code" /><span>Visual Studio Code</span></motion.div>
    </motion.div>
  )
}

export default CurrentTechTools