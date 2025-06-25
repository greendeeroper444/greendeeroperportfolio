import React, { useEffect, useState } from 'react'
import styles from './Project.module.css';
import { Link } from 'react-router-dom';
import { cookBookScreenshot, foodcastMobileScreenshot, foodcastScreenshot, mapuaScreenshot, merdsBakeshopScreenshot, msxScreenshot, razonclinicScreenshot, sabondepotScreenshot } from '../../assets/systems';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal2 from '../Modals/Modal2';

function ProjectSystem() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [showMore, setShowMore] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [fullImageModal, setFullImageModal] = useState(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleShowMore = () => {
        setShowMore(true);
        setAnimationKey(prevKey => prevKey + 1);
    };

    const handleShowLess = () => {
        setShowMore(false);
        setAnimationKey(prevKey => prevKey + 1);
    };

    const openFullImage = (project) => {
        setFullImageModal(project);
        document.body.style.overflow = 'hidden'; //prevent background scrolling
    };

    const closeFullImage = () => {
        setFullImageModal(null);
        document.body.style.overflow = 'unset'; // re4store scrolling
    };

    useEffect(() => {
        if(inView){
            controls.start('visible');
        } else{
            controls.start('hidden');
        }
    }, [controls, inView, showMore]);

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.3 }
        })
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

    const systemProjects = [
        {
            title: 'Foodcast Web',
            caption: 'A capstone system I built for managing admin and staff operations.',
            description: 'The web platform for our capstone project, Foodcast. It enables staff and administrators to manage supply waste collection and distribution. Key features include supply and waste tracking, forecasting, report generation, map-based supplier views, vendor and collector profile management, and real-time communication.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Module CSS'],
            imageUrl: foodcastScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/FoodCast_Web'
        },
        {
            title: 'Foodcast Mobile',
            caption: 'The mobile counterpart of our capstone project for vendors and collectors.',
            description: 'The mobile app for Foodcast designed for vendors and collectors. It allows users to log supply data and report collected waste, which integrates seamlessly with the Foodcast Web platform.',
            techStack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Expo'],
            imageUrl: foodcastMobileScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/FoodCast_Mobile'
        },
        {
            title: 'Mapua Forum System',
            caption: 'A system I created to support mapua students working on their capstone projects.',
            description: 'An interactive forum platform tailored for students of Mapua College. It supports academic discussions, project collaborations, and knowledge sharing, with features like threaded discussions, file sharing, user reputation, and course-specific forums.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
            imageUrl: mapuaScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/PROJENCOMPASS-MMCM'
        },
        {
            title: 'MSX',
            caption: 'A music streaming app I built for my final project in Integrative Programming.',
            description: 'A Spotify-inspired mobile app where users can stream music. Developed using Flutter with Firebase integration for real-time data.',
            techStack: ['Flutter', 'Firebase', 'Dart'],
            imageUrl: msxScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/Msx-App'
        },
        {
            title: 'Sabon Depot',
            caption: 'A system I created to support students working on their capstone projects.',
            description: 'A full-featured e-commerce and inventory management platform tailored for a soap and cleaning product business. Includes POS functionality, supplier and stock tracking, sales analytics, and a customer loyalty system.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vanilla CSS'],
            imageUrl: sabondepotScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/SabonTech-System'
        },
        {
            title: 'Razon Pediatric Clinic',
            caption: 'A clinic management system built to help students with their capstone project.',
            description: 'A clinic management system designed for pediatric clinics. It includes patient registration, appointment scheduling, medical records, billing, and reports to help streamline clinic operations and improve service quality.',
            techStack: ['React.ts', 'Node.js', 'Express.js', 'MongoDB', 'Module CSS'],
            imageUrl: razonclinicScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/razon-clinic'
        },
        {
            title: 'Merds Bakeshop',
            caption: 'A passion project inspired by my partner’s dream to open a bakeshop.',
            description: 'An e-commerce platform for a bakeshop business. It supports online ordering, inventory tracking, and customer relationship management to help grow small food businesses.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Laravel'],
            imageUrl: merdsBakeshopScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/Merds_Bakeshop'
        },
        {
            title: 'Cook Book',
            caption: 'A personal recipe app inspired by content creator Frace Marteja.',
            description: 'A simple yet useful recipe app where users can save and organize their favorite dishes.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
            imageUrl: cookBookScreenshot,
            projectUrl: 'https://github.com/greendeeroper444/Cook-Book-Test'
        }
    ];


    const visibleSystems = showMore
        ? systemProjects
        : windowWidth <= 768 ? systemProjects.slice(0, 3) : systemProjects.slice(0, 5);
    
  return (
    <>
        <motion.div ref={ref}
            initial='hidden'
            animate={controls}
            variants={{
                hidden: {},
                visible: {
                    transition: {staggerChildren: 0.2}
                },
            }}
        >
            <div className={styles.projectList}>
                {
                    visibleSystems.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectSystemItem}
                            custom={index}
                            variants={projectVariants}
                        >
                            <div className={styles.projectSystemImage}>
                                <img src={project.imageUrl} alt={project.title} className={styles.mainImage} />
                                <div className={styles.hoverImage}>
                                    <div className={styles.hoverImageContent}>
                                        <h4>{project.title}</h4>
                                        <div className={styles.hoverButtons}>
                                            <button 
                                                className={styles.viewFullImageBtn}
                                                onClick={() => openFullImage(project)}
                                            >
                                                View Full Image
                                            </button>
                                            <Link to={project.projectUrl} target='_blank' className={styles.viewProject}>
                                                View Project
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectSystemDetails}>
                                <h5>{project.title}</h5>
                                <p className={styles.projectCaption}>{project.caption}</p>
                                <div className={styles.projectDescription}>
                                    <p>{project.description}</p>
                                </div>
                                <div className={styles.techStack}>
                                    <h6>Tech Stack:</h6>
                                    <div className={styles.techTags}>
                                        {
                                            project.techStack.map((tech, techIndex) => (
                                                <span key={techIndex} className={styles.techTag}>
                                                    {tech}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            <motion.div className={styles.seeButtons} variants={zoomInVariants}>
                {
                    showMore ? (
                        <button className={styles.seeLessButton} onClick={handleShowLess}>
                            See Less
                        </button>
                    ) : (
                        <button className={styles.seeMoreButton} onClick={handleShowMore}>
                            See More...
                        </button>
                    )
                }
            </motion.div>
        </motion.div>

      
        <Modal2
            fullImageModal={fullImageModal} 
            closeFullImage={closeFullImage} 
        />
    </>
  )
}

export default ProjectSystem