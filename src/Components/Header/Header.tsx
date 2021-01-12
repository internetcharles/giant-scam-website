import React from 'react';
import { Wrapper, Heading, SubHeading } from './Header.styles';
import styles from './Header.module.css';
import giantScamImage from '../../Assets/wordart.png';

export const Header: React.FC = () => {
  return(
    <div>
      <Wrapper>
        <Heading>
          <img className={styles.image} alt="Giant Scam Industries" src={giantScamImage} />
        </Heading>
        <SubHeading>
          A Legitimate Company, Not a Scam ©
        </SubHeading>
      </Wrapper>
    </div>
  )
}