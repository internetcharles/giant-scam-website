import styles from './Links.module.css';
import React from 'react'
import { LinkItem } from './LinkItem';

interface Props {

}

export const Links = (props: Props) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.borderDiv}>
      <div className={styles.container}>
        <h1 className={styles.new}>NEW!</h1>
        <LinkItem URL='https://store.steampowered.com/app/1133580/Snapshot_VR/' title='Snapshot' />
        <div className={styles.divider}> -- </div>
        <LinkItem URL='https://store.steampowered.com/app/812580/Chop_It/' title='Chop It!' />
        <div className={styles.divider}> -- </div>
        <LinkItem URL='https://medium.com/giant-scam' title='Blog' />
        <div className={styles.divider}> -- </div>
        <LinkItem URL='https://giantscam.bigcartel.com/' title='Store' />
        <div className={styles.divider}> -- </div>
        <LinkItem URL='https://twitter.com/giantscam' title='Twitter' />
        <div className={styles.divider}> -- </div>
        <LinkItem URL='https://instagram.com/giantscam' title='Instagram' />
        <div className={styles.divider}> -- </div>
        <LinkItem URL='https://facebook.com/giantskam' title='Facebook' />
      </div>
    </div>
    </div>
  )
}
