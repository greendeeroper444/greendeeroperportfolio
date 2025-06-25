import React, { useEffect } from 'react'
import styles from './About.module.css';
import { csharp, figma, java, mysql, netcore, python, sass } from '../../assets';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function MyMinorSkills() {
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
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={sass} alt="Sass" /><span>SASS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={netcore} alt="Netcore" /><span>.Net Core</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={csharp} alt="Csharp" /><span>C#</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={java} alt="Java" /><span>Java</span></motion.div>
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={python} alt="Python" /><span>Python</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={mysql} alt="MySql" /><span>MySql</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={figma} alt="Figma" /><span>Figma</span></motion.div>
    </motion.div>
  )
}

export default MyMinorSkills