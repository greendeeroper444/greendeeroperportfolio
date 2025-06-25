import React from 'react'
import styles from './Modals.module.css';
import PropTypes from 'prop-types';

function Modal2({fullImageModal, closeFullImage}) {
    if (!fullImageModal) return null;

  return (
    <div className={styles.fullImageModal} onClick={closeFullImage}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeFullImage}>
                ×
            </button>
            <img 
                src={fullImageModal.imageUrl} 
                alt={fullImageModal.title} 
                className={styles.fullImage}
            />
            <div className={styles.modalInfo}>
                <h3>{fullImageModal.title}</h3>
                <p>{fullImageModal.description}</p>
                <div className={styles.modalTechStack}>
                    <strong>Technologies Used:</strong>
                    <div className={styles.modalTechTags}>
                        {
                            fullImageModal.techStack.map((tech, index) => (
                                <span key={index} className={styles.modalTechTag}>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

Modal2.propTypes = {
    fullImageModal: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    closeFullImage: PropTypes.func.isRequired,
    modalClasses: PropTypes.shape({
        fullImageModal: PropTypes.string,
        modalContent: PropTypes.string,
        closeModal: PropTypes.string,
        fullImage: PropTypes.string,
        modalInfo: PropTypes.string,
        modalTechStack: PropTypes.string,
        modalTechTags: PropTypes.string,
        modalTechTag: PropTypes.string
    }),
    showTechStack: PropTypes.bool,
    techStackLabel: PropTypes.string
};


export default Modal2