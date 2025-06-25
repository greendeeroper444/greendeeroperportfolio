import React, { useEffect, useState } from 'react'
import styles from './TechTools.module.css';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CurrentTechTools from './CurrentTechTools';
import OldTechTools from './OldTechTools';

function TechTools() {
    const [activeTab, setActiveTab] = useState('current');
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


    const waveSlideVariants = {
        hidden: { 
            opacity: 0, 
            x: 50, 
            scale: 1 
        },
        visible: i => ({
            opacity: 1,
            x: 0,
            scale: [1, 1.2, 1],
            transition: {
                delay: i * 0.3,
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        }),
    };

  return (
    <motion.div className={styles.techtools}
    ref={ref}
    initial='hidden'
    animate={controls}
    variants={{
        hidden: {},
        visible: {transition: {staggerChildren: 0.2}},
    }}
    >
        <div className={styles.techtoolsHeader}>
            <motion.h4 variants={topVariants}>My Tech Tools</motion.h4>
        </div>
        <div className={styles.techtoolsContent}>
            <div className={styles.techtoolsTabs}>
                <button 
                className={`${activeTab === 'current' ? styles.active : ''}`}
                onClick={() => setActiveTab('current')}
                >
                    Current Tech Tools
                </button>
                <button 
                className={`${activeTab === 'old' ? styles.active : ''}`}
                onClick={() => setActiveTab('old')}
                >
                    Old Tech Tools
                </button>
            </div>
            <br />
            <div>
                {
                    activeTab === 'current' ? <CurrentTechTools /> : <OldTechTools />
                }
            </div>
        </div>
    </motion.div>
  )
}

export default TechTools