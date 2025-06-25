import React, { useEffect, useState } from 'react'
import styles from './Project.module.css';
import { useAnimation, motion, delay } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ProjectSystem from './ProjectSystem';
import ProjectPortrait from './ProjectPortrait';
    

function Project() {
    const [activeTab, setActiveTab] = useState('system');
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

    const leftVariants = {
        hidden: { 
            opacity: 0, 
            x: -100 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {
                duration: 3,
                delay: 3
            } 
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
            transition: {
                duration: 3,
                delay: 3
            } 
        },
    };

  return (
    <motion.div className={styles.project}
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
        <div className={styles.projectHeader}>
            <motion.h4 variants={topVariants}>My Projects</motion.h4>
        </div>
        <div className={styles.projectContent}>
            <div className={styles.projectTabs}>
                <button 
                className={`${activeTab === 'system' ? styles.active : ''}`}
                onClick={() => setActiveTab('system')}
                >
                    Project System
                </button>
                <button 
                className={`${activeTab === 'portrait' ? styles.active : ''}`}
                onClick={() => setActiveTab('portrait')}
                >
                    Project Portrait
                </button>
            </div>
            <br />
            {
                activeTab === 'system' ? <ProjectSystem /> : <ProjectPortrait />
            }
        </div>

        <div className={styles.projectFooter}>
            {
                activeTab === 'system' && (
                    <>
                        <motion.h4 variants={leftVariants}>For more, visit on my</motion.h4>
                        <motion.h4 variants={rightVariants}><Link to="https://github.com">Github Account</Link></motion.h4>
                    </>
                )
            }
        </div>
    </motion.div>
  )
}

export default Project
