import styles from './Links.module.css';
import React from 'react'
import { LinkItem } from './LinkItem';

interface Props {

}

export const Links = (props: Props) => {
  return (
    <div className={styles.borderDiv}>
      <div className={styles.container}>
        <LinkItem URL='https://store.steampowered.com/app/1133580/Snapshot_VR/' title='Snapshot' />
      </div>
    </div>
  )
}
