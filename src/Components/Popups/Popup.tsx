import React from 'react'
import CloseButton from '../../Assets/close-btn.jpg';
import MinimizeButton from '../../Assets/minimise-btn.jpg';
import Draggable from 'react-draggable'
import styles from './Popup.module.css';

interface Props {
  url: string,
  image: string,
  hideWindow: any
}

export const Popup: React.FC<Props> = ({image, url, hideWindow}) => {
  return (
    <Draggable defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <span className={styles.windowsText}>HOT DEAL!!</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} alt="Minimize" />
              <img src={CloseButton} alt="Close" className={styles.exit} onClick={hideWindow} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <a href={url}>
              <img src={image} alt={image} />
            </a>
          </div>
        </div>
      </div>
    </Draggable>
  )
}