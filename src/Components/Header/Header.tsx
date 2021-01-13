import React from 'react';
import { Wrapper, Heading, SubHeading } from './Header.styles';
import styles from './Header.module.css';
import giantScamImage from '../../Assets/wordart.png';
import money from '../../Assets/money.png';

export const Header: React.FC = () => {
  return(
    <div>
      <Wrapper>
        <Heading>
          <img className={styles.image} alt="Giant Scam Industries" src={giantScamImage} />
        </Heading>
        <SubHeading>
          <img src={money} className={styles.money} alt="Money" />
          A Legitimate Company, Not a Scam ©
          <img src={money} className={styles.money} alt="Money" />       
        </SubHeading>
      </Wrapper>
    </div>
  )
}