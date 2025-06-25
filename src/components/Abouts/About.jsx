import React, { useEffect, useState } from 'react'
import styles from './About.module.css';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MyMajorSkills from './MyMajorSkills';
import MyMinorSkills from './MyMinorSkills';

function About() {
    const [showMore, setShowMore] = useState(false);
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
    }, [controls, inView, showMore]);

   
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

    const zoomInVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.5 
        },
        visible: {
            opacity: 1, 
            scale: 1, 
            transition: {duration: 0.5} 
        },
    };

  return (
    <motion.div
    className={styles.about}
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
        <div className={styles.aboutHeader}>
            <motion.h4 variants={topVariants}>About Me</motion.h4>
        </div>
        <div className={styles.aboutContent}>
            <div className={styles.aboutLeft}>
                <div className={styles.aboutTabs}>
                    <button 
                    className={`${activeTab === 'current' ? styles.active : ''}`}
                    onClick={() => setActiveTab('current')}
                    >
                        My Major Skills
                    </button>
                    <button 
                    className={`${activeTab === 'old' ? styles.active : ''}`}
                    onClick={() => setActiveTab('old')}
                    >
                        My Minor Skills
                    </button>
                </div>
                <br />
                {
                    activeTab === 'current' ? <MyMajorSkills /> : <MyMinorSkills />
                }
    
            </div>
            <div className={styles.aboutRight}>
                <motion.p variants={waveSlideVariants} custom={0}>
                    I recently graduated from Davao del Norte State College with a Bachelor of Science in Information Technology. My journey as a full-stack developer started when I chose this IT course. It all began because I have a friend dreaming of building a game. That idea sparked something in me and I realized that programming was the key, and I wanted to be part of that world.
                    In my first year in 2021, I was really eager to learn. I started with Java guided by my instructor. I was learning a lot like basics and concept of programming, but to be honest, I did not find it exciting at first. Creating a simple Java GUI did not really enough on me, and I struggled to stay motivated while studying on my own. Eventually, I stepped back from coding for a while and turned my attention to something else someone I loved, and also focus on drawing portraits.
                </motion.p>
                <motion.p variants={waveSlideVariants} custom={1}>
                    By my second year, things started to improved my self. I dipped my toes into frontend development with HTML, CSS, Bootstrap, and a bit of JavaScript. I also got a quick look at backend development using PHP. It was all still new to me but what really reignited my passion was a data structures and algorithms course. It was hard, and honestly I did not get it right away but the problem-solving aspect pulled me in. Completing our final project gave me a real sense of accomplishment. That feeling pushed me to explore Laravel, and even though my system wasn’t perfect, I was proud of it. More importantly, I was starting to believe in my ability to solve problems and debug on my own.
                </motion.p>
                <span className={styles.normalScreenShown}>
                <motion.p variants={waveSlideVariants} custom={2}>
                    My third year was all about growth. I explored more tools and languages—C#, .NET Core, and basic Python. I got into modern frameworks like React.js, Node.js, and Tailwind CSS, and even built a mobile app using Flutter. One of the highlights of the year was collaborating with students from Mapúa University on their capstone project. We used the MERN stack, and it was a challenging yet rewarding experience that really put my skills to the test in a real-world setting.
                </motion.p>
                    {
                        showMore && (
                            <div key={showMore ? 'more' : 'less'}
                            >
                                <motion.p variants={waveSlideVariants} custom={3}>
                                    As I entered my fourth year, I found myself fully committed to the MERN stack. I am currently helping another student with their capstone project and I am really excited about. It is more than just applying what I’ve learned; it is also a way for me to support my family and ease some of the financial burden. I am grateful for the chance to use my skills in a meaningful way and be part of someone else’s success.
                                </motion.p>
                                <motion.p variants={waveSlideVariants} custom={4}>
                                    I am profoundly thankful to God for guiding me throughout this journey. His blessings have been a constant source of strength and inspiration, helping me overcome challenges and achieve my goals. Each step of this journey has been a testament to His grace, and I am grateful for the opportunities and support I have received. My achievements are a reflection of His guidance, and I look forward to continuing this path with gratitude and faith.
                                </motion.p>
                            </div>
                        )
                    }
                    <motion.button variants={zoomInVariants} onClick={() => setShowMore(!showMore)} className={styles.seeMoreButtonDefault}>
                        {showMore ? 'See Less' : 'See More...'}
                    </motion.button>
                </span>
                <span className={styles.mobileScreenShown}>
                    {
                        showMore && (
                            <div key={showMore ? 'more' : 'less'}
                            >
                                <motion.p variants={waveSlideVariants} custom={2}>
                                    My third year was all about growth. I explored more tools and languages—C#, .NET Core, and basic Python. I got into modern frameworks like React.js, Node.js, and Tailwind CSS, and even built a mobile app using Flutter. One of the highlights of the year was collaborating with students from Mapúa University on their capstone project. We used the MERN stack, and it was a challenging yet rewarding experience that really put my skills to the test in a real-world setting.
                                </motion.p>
                                <motion.p variants={waveSlideVariants} custom={3}>
                                    As I entered my fourth year, I found myself fully committed to the MERN stack. I am currently helping another student with their capstone project and I am really excited about. It is more than just applying what I’ve learned; it is also a way for me to support my family and ease some of the financial burden. I am grateful for the chance to use my skills in a meaningful way and be part of someone else’s success.
                                </motion.p>
                                <motion.p variants={waveSlideVariants} custom={4}>
                                    I am profoundly thankful to God for guiding me throughout this journey. His blessings have been a constant source of strength and inspiration, helping me overcome challenges and achieve my goals. Each step of this journey has been a testament to His grace, and I am grateful for the opportunities and support I have received. My achievements are a reflection of His guidance, and I look forward to continuing this path with gratitude and faith.
                                </motion.p>
                            </div>
                        )
                    }
                    <motion.button variants={zoomInVariants} onClick={() => setShowMore(!showMore)} className={styles.seeMoreButtonMobile}>
                        <span>{showMore ? 'See Less' : 'See More...'}</span>
                    </motion.button>
                </span>
            </div>
        </div>
    </motion.div>
  )
}

export default About
