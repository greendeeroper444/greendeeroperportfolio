import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar({closeSidebar}) {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('#home-main-container');

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        setActiveLink(`#${targetId}`);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

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

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const links = [
        {href: '#home-main-container', label: 'Home'},
        {href: '#about-main-container', label: 'About'},
        {href: '#project-main-container', label: 'Projects'},
        {href: '#achievement-main-container', label: 'Achievements'},
        {href: '#techtools-main-container', label: 'TechTools'},
        {href: '#contact-main-container', label: 'Contact'},
    ];

  return (
    <div className={styles.sidebar}>
        <div className={styles.xTimeIcon} onClick={closeSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </div>
        <div className={styles.sidebarNav}>
            {
                links.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className={`${styles.sidebarNavLink} ${activeLink === link.href ? styles.active : ''}`}
                    onClick={(e) => handleScroll(e, link.href.substring(1))}
                    >
                        {link.label}
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar
