import React from 'react';
import styles from './LinkItem.module.css';

interface Props {
  URL: string,
  title: string,
}

export const LinkItem: React.FC<Props> = ({URL, title}) => {
  return (
    <div className={styles.wrapper}>
      <a href={URL}>
        <div className={styles.item}>{title}</div>
      </a>
    </div>
  )
}
