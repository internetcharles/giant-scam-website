import React from 'react';
import styles from './Links.module.css';

interface Props {
  URL: string,
  title: string,
}

export const LinkItem: React.FC<Props> = ({URL, title}) => {
  return (
    <div className={styles.wrapper}>
      <a href={URL}>
        <div>{title}</div>
      </a>
    </div>
  )
}
