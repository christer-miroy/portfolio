import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, videoSrc }) => {
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <span className={styles.closeButton} onClick={onClose}>
            &times;
          </span>
          <video width="100%" height="auto" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  );
};

export default Modal;