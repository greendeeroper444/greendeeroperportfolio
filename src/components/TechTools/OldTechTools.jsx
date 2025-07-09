import React, { useEffect } from 'react'
import { androidstudio, apachenetbeans, arduino, csharp, dart, electronjs, figma, flutter, java, laragon, laravel, mysql, netcore, php, postman, pycharm, python, r, rstudio, sass, sublime, tailwind, vscode, workbench, xampp, } from '../../assets';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './TechTools.module.css';

function OldTechTools() {
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

        <motion.div className={styles.techIcon} variants={leftVariants}><img src={php} alt="PHP" /><span>PHP</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={flutter} alt="Flutter" /><span>Flutter</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={dart} alt="Dart" /><span>Dart</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={sass} alt="Sass" /><span>SASS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={electronjs} alt="ElectronJS" /><span>ElectronJS</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={netcore} alt="Netcore" /><span>.Net Core</span></motion.div>
        <motion.div className={styles.techIcon} variants={topVariants}><img src={csharp} alt="Csharp" /><span>C#</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={java} alt="Java" /><span>Java</span></motion.div>
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={python} alt="Python" /><span>Python</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={vscode} alt="VS Code" /><span>VS Code</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={sublime} alt="Sublime Text" /><span>Sublime Text</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={xampp} alt="Xampp" /><span>Xampp</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={laragon} alt="Laragon" /><span>Laragon</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={androidstudio} alt="Android Studio" /><span>Android Studio</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={pycharm} alt="PyCharm" /><span>PyCharm</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={mysql} alt="MySql" /><span>MySql</span></motion.div>
        <motion.div className={styles.techIcon} variants={leftVariants}><img src={workbench} alt="Workbench" /><span>Workbench</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={postman} alt="Post Man" /><span>Post Man</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={apachenetbeans} alt="Apache NetBeans" /><span>Apache NetBeans</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={r} alt="R" /><span>R</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={rstudio} alt="R Studio" /><span>R Studio</span></motion.div>
        <motion.div className={styles.techIcon} variants={bottomVariants}><img src={arduino} alt="Arduino" /><span>Arduino</span></motion.div>
        <motion.div className={styles.techIcon} variants={rightVariants}><img src={figma} alt="Figma" /><span>Figma</span></motion.div>
    </motion.div>
  )
}

export default OldTechTools