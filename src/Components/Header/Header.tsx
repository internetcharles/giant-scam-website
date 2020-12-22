import React from 'react';
import { HeaderStyles, Heading } from './Header.styles';

export const Header: React.FC = () => {
  return(
    <div>
      <HeaderStyles />
      <div>
        <Heading>
          GIANT SCAM INDUSTRIES
        </Heading>
        <h2>
          A Legitimate Company, Not a Scam ©
        </h2>
      </div>
    </div>
  )
}