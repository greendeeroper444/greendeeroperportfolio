import React, { useEffect, useState, useMemo, useCallback } from 'react'
import styles from './Project.module.css';
import { aram, carlo, cluade, cydric, digong, dina, edison, emil2, groupPortrait, jerrick, jumaw, kyla, mama, meriam, meriam2, meriam3, meriam4, papa, ruvic } from '../../assets/portraits';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//memoized portrait item component to prevent unnecessary re-renders
import PropTypes from 'prop-types';
import Modal1 from '../Modals/Modal1';

const PortraitItem = React.memo(function PortraitItem(props) {
    const { project, index, onClick, variants } = props;
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    return (
        <motion.div
            className={styles.projectPortraitsItem}
            custom={index}
            variants={variants}
            onClick={() => onClick(project, index)}
        >
        <div className={styles.projectPortraitsImage}>
            {
                !imageLoaded && !imageError && (
                    <div className={styles.imagePlaceholder} style={{
                        backgroundColor: '#f0f0f0',
                        width: '100%',
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }}>
                        Loading...
                    </div>
                )
            }
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={styles.mainImage}
                loading="lazy" //native lazy loading
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                    setImageError(true);
                    setImageLoaded(true); //hide placeholder even on error
                }}
                style={{ 
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                    width: '100%',
                    height: 'auto'
                }}
            />
            {
                imageError && (
                    <div style={{
                        backgroundColor: '#f5f5f5',
                        width: '100%',
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        border: '1px dashed #ccc'
                    }}>
                        Failed to load image
                    </div>
                )
            }
        </div>
        </motion.div>
    );
});
PortraitItem.displayName = 'PortraitItem';

PortraitItem.propTypes = {
    project: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    variants: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]).isRequired,
};

function ProjectPortrait() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //memoize portrait projects array to prevent recreation on each render
    const portraitProjects = useMemo(() => [
        {imageUrl: digong, title: 'Digong'},
        {imageUrl: jerrick, title: 'Jerrick'},
        {imageUrl: cluade, title: 'Claude'},
        {imageUrl: meriam3, title: 'Meriam 3'},
        {imageUrl: meriam4, title: 'Meriam 4'},
        {imageUrl: aram, title: 'Aram'},
        {imageUrl: carlo, title: 'Carlo'},
        {imageUrl: cydric, title: 'Cydric'},
        {imageUrl: dina, title: 'Dina'},
        {imageUrl: edison, title: 'Edison'},
        {imageUrl: emil2, title: 'Emil 2'},
        {imageUrl: groupPortrait, title: 'Group Portrait'},
        {imageUrl: jumaw, title: 'Jumaw'},
        {imageUrl: kyla, title: 'Kyla'},
        {imageUrl: mama, title: 'Mama'},
        {imageUrl: meriam, title: 'Meriam'},
        {imageUrl: meriam2, title: 'Meriam 2'},
        {imageUrl: papa, title: 'Papa'},
        {imageUrl: ruvic, title: 'Ruvic'},
    ], []);

    //debounced resize handler to reduce resize event frequency
    useEffect(() => {
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 150); //debounce resize events
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    //memoize visible portraits calculation
    const visiblePortraits = useMemo(() => {
        if (showMore) return portraitProjects;
        return windowWidth <= 768 ? portraitProjects.slice(0, 4) : portraitProjects.slice(0, 15);
    }, [showMore, windowWidth, portraitProjects]);

    //use useCallback to prevent function recreation on each render
    const handleShowMore = useCallback(() => {
        setShowMore(true);
    }, []);

    const handleShowLess = useCallback(() => {
        setShowMore(false);
    }, []);

    const handleImageClick = useCallback((image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    }, []);

    const handleClose = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % portraitProjects.length;
            setSelectedImage(portraitProjects[newIndex]);
            return newIndex;
        });
    }, [portraitProjects]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + portraitProjects.length) % portraitProjects.length;
            setSelectedImage(portraitProjects[newIndex]);
            return newIndex;
        });
    }, [portraitProjects]);

    useEffect(() => {
        if(inView){
            controls.start('visible');
        } else{
            controls.start('hidden');
        }
    }, [controls, inView]);

    //memoize animation variants
    const projectVariants = useMemo(() => ({
        hidden: { opacity: 0, scale: 0.8 },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.1 } //reduced delay for faster animations
        })
    }), []);

    const zoomInVariants = useMemo(() => ({
        hidden: { 
            opacity: 0, 
            scale: 0.5 
        },
        visible: {
            opacity: 1, 
            scale: 1, 
            transition: {duration: 0.3} //reduced duration
        },
    }), []);

    const containerVariants = useMemo(() => ({
        hidden: {},
        visible: {
            transition: {staggerChildren: 0.05} //reduced stagger delay
        },
    }), []);

  return (
    <motion.div 
    ref={ref}
    initial='hidden'
    animate={controls}
    variants={containerVariants}
    >
        <div className={styles.projectList}>
            {
                visiblePortraits.map((project, index) => (
                    <PortraitItem
                        key={`${project.title}-${index}`} //more stable key
                        project={project}
                        index={index}
                        onClick={handleImageClick}
                        variants={projectVariants}
                    />
                ))
            }

            <Modal1
                image={selectedImage}
                onClose={handleClose}
                onNext={handleNext}
                onPrev={handlePrev}
            />
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
  )
}

export default ProjectPortrait