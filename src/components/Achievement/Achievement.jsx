import React, { useEffect } from 'react'
import styles from './Achievement.module.css';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Achievement() {
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

    const fadeInVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 50,
                damping: 10,
            },
        },
    };

    const achievements = [
        {
            year: '2019 - Present', 
            title: 'Barber', 
            text: 'In 2018, I began learning how to cut hair because my friends wanted me to use scissors to trim their hair, following our school\'s rule that hair should be kept short. As I practiced, I became more skilled. By 2019, my father bought me a razor, and I started cutting hair for students, adults, and children for 50 pesos.' 
        },
        {
            year: '2021 - 2023', 
            title: 'Portrait Maker', 
            text: 'In 2021, I started developing my portrait drawing skills after meeting someone who captured my heart and became my girlfriend. I drew her many times, and although my initial attempts weren\'t great, I eventually perfected my technique. I shared my drawings on Facebook, and soon people began requesting portraits and offering to pay for them. I gained many customers through these commissions. However, I haven\'t been drawing recently because I\'ve become focused on learning programming and creating systems.' 
        },
        {
            year: '2023', 
            title: 'Virtual Assistant/Part-Time Job', 
            text: 'I started working as a Virtual Assistant on March 21, 2023, thanks to an opportunity provided by my instructor (who I can\'t name). I began earning 100 pesos per hour, and I\'m very grateful to this instructor for their kindness and support.' 
        },
        {
            year: '2024 & 2025 - Present', 
            title: 'Full Stack Developer/Part-Time Job', 
            text: 'In 2024 & 2025, I received many opportunities to work on systems and capstone projects for students and clients from other schools. I’m grateful because this work allows me to support my parents and no longer feel like a burden. With my earnings, I buy our food and other necessities. I’m thankful to God that my programming skills have been so helpful.' 
        },
    ];

  return (
    <motion.div className={styles.achievement}
    id='achievement-container'
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
        <div className={styles.achievementHeader}>
            <motion.h4 variants={topVariants}>My Achievements</motion.h4>
        </div>
        <ol className={styles.achievementTimeline}>
            {
                achievements.map((achievement, index) => (
                    <motion.li key={index} className={styles.achievementItem} variants={fadeInVariants}>
                        <div className={styles.achievementYearContainer}>
                            <span className={styles.achievementYear}>{achievement.year}</span>
                        </div>
                        <div className={styles.achievementContent}>
                            <span className={styles.achievementTitle}>{achievement.title}</span>
                            <p className={styles.achievementText}>{achievement.text}</p>
                        </div>
                    </motion.li>
                ))
            }
        </ol>
    </motion.div>
  )
}

export default Achievement