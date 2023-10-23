import { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl, getVideoUrl } from '../../utils';
import Modal from './Modal';

export const ProjectCard = ({
  project: { title, imageSrc, skills, videoSrc },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <button onClick={openModal} className={styles.link}>
          Demo
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoSrc={getVideoUrl(videoSrc)} />
    </div>
  );
};
