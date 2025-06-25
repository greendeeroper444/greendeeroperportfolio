import React, { useEffect, useState } from 'react'
import styles from './Sidelink.module.css';
import homeIcon from '../../assets/home-white.png'
import aboutIcon from '../../assets/about-white.png'
import projectIcon from '../../assets/project-white.png'
import achievementIcon from '../../assets/achievement-white.png'
import techtoolsIcon from '../../assets/techtools-white.png'
import contactIcon from '../../assets/contact-white.png'
import { Link } from 'react-router-dom';

function Sidelink() {
    const [activeLink, setActiveLink] = useState('#home-main-container');

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        setActiveLink(`#${targetId}`);
        document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});
    };

    const links = [
        {href: '#home-main-container', icon: homeIcon, label: 'Home'},
        {href: '#about-main-container', icon: aboutIcon, label: 'About'},
        {href: '#project-main-container', icon: projectIcon, label: 'Projects'},
        {href: '#achievement-main-container', icon: achievementIcon, label: 'Achievements'},
        {href: '#techtools-main-container', icon: techtoolsIcon, label: 'TechTools'},
        {href: '#contact-main-container', icon: contactIcon, label: 'Contact'},
    ];

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: [0.3, 0.7]
        });

        links.forEach(link => {
            const target = document.getElementById(link.href.substring(1));
            if(target){
                observer.observe(target);
            }
        });

        return () => {
            links.forEach(link => {
                const target = document.getElementById(link.href.substring(1));
                if(target){
                    observer.unobserve(target);
                }
            });
        };
        
}, []);

  return (
    <div className={styles.sidelink}>
        {
            links.map(link => (
                <div className={styles.sidelinkWrapper} key={link.href}>
                    <Link 
                    to={link.href} 
                    className={`${styles.sidelinkCircle} ${activeLink === link.href ? styles.active : ''}`}
                    onClick={(e) => handleScroll(e, link.href.substring(1))}
                    >
                        <img src={link.icon} alt={`${link.label} Icon`} className={styles.sidelinkIcon} />
                    </Link>
                    <span className={styles.tooltip}>{link.label}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Sidelink