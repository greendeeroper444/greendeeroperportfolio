import React from 'react'
import styles from './Modals.module.css';
import { TfiAngleLeft,TfiAngleRight } from "react-icons/tfi";

function Modal1({image, onClose, onNext, onPrev}) {
    if(!image) return null;

  return (
    <div className={styles.projectModalContainer} onClick={onClose}>
        <div className={styles.projectModalContent} onClick={e => e.stopPropagation()}>
           <button className={`${styles.navButton} ${styles.prevButton}`} onClick={onPrev}>
                <TfiAngleLeft size={40} />
            </button>
            <img src={image.imageUrl} alt={image.title} className={styles.zoomedImage} />
            <button className={`${styles.navButton} ${styles.nextButton}`} onClick={onNext}>
                <TfiAngleRight size={40} />
            </button>
        </div>
    </div>
  )
}

export default Modal1