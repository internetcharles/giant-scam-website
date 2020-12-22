import React from 'react';
import { Wrapper, Heading, SubHeading } from './Header.styles';

export const Header: React.FC = () => {
  return(
    <div>
      <Wrapper>
        <Heading>
          GIANT SCAM INDUSTRIES
        </Heading>
        <SubHeading>
          A Legitimate Company, Not a Scam ©
        </SubHeading>
      </Wrapper>
    </div>
  )
}