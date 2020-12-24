import React from 'react';
import styles from './Links.module.css';

interface Props {
  
}

export const LinkItem = ({imageURL, title}) => {
  return (
    <div className={styles.wrapper}>
      <img src={imageURL} alt={title} />
      <div>{title}</div>
    </div>
  )
}
