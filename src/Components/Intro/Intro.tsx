import React from 'react';
import styles from './Intro.module.css';
import garfield from '../../Assets/garfield.gif';
import { Game } from '../Games/Game';
import snapshotOne from '../../Assets/snapshot1.jpg'
import snapshotTwo from '../../Assets/snapshot2.jpg'
import snapshotThree from '../../Assets/snapshot3.jpg'
import chopItOne from '../../Assets/chopit1.jpg'
import chopItTwo from '../../Assets/chopit2.jpg'
import chopItThree from '../../Assets/chopit3.jpg'
import Ticker from 'react-ticker';


interface Props {
  
}

const Intro = (props: Props) => {

  const snapshotImages = [snapshotOne, snapshotTwo, snapshotThree]
  const chopItImages = [chopItOne, chopItTwo, chopItThree]

  return (
    <div className={styles.wrapper}>
      <p>
        Hello! Welcome to the website for our legitimate company that makes real games.
      </p>
      <img className={styles.garfield} src={garfield} alt="Garfield" />
      <p className={styles.disclaimer}>Garfield is the intellectual property of Jim Davis. He has no affiliation with Giant Scam Industries.</p>

      <p>
        We are very excited to have you visiting our website.
      </p>
      <div>
        Also, did you know that we are a legitimate company?
      </div>
      <div className={styles.snapshotDiv}>
        <Ticker mode="await" direction="toRight" speed={10}>{({ index }) => (
          <p><div className={styles.hot}>HOT</div>-- Snapshot --<div className={styles.hot}>HOT</div></p>
        )}
        </Ticker>
        <Game images={snapshotImages} />
      </div>
      <div className={styles.descriptionHeader}>
        Snapshot is the newest game from Giant Scam!!!
      </div>
      <div>
        Try your luck on the battlefield as you engage in an endless array of arenas.
      </div>
      <p className={styles.wrapper}>      
        <div>
          "This is the paintball of the future."
        </div>
        <div>
          - Me (2020)
        </div>
      </p>
      <div className={styles.snapshotDiv}>
        <Ticker mode="await" direction="toRight" speed={10}>{({ index }) => (
          <p>Chop It!</p>
        )}
        </Ticker>
          <Game images={chopItImages} />
      </div>  
      <div className={styles.descriptionHeader}>
        Chop It! is a rhythm karate game in which you chop boards to hot beats!
      </div>
      <div>
        Users are able to map and customize their favorite songs for some smooth karate action!
      </div>
      <p className={styles.wrapper}>      
        <div>
          "Chop It! changed my life."
        </div>
        <div>
          - Chad Ochocinco (2013 maybe)
        </div>
      </p>
    </div>
  )
}

export default Intro
