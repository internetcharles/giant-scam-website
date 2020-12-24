import React from 'react';
import { Title, Wrapper, Image, ImageWrapper } from './Game.styles';

interface Props {
  title: string;
  info: string;
  imageURL: string;
}

export const Game: React.FC<Props> = ({ imageURL, title, info }) => {
  return (
    <div>
      <Wrapper>
      <Title>
        {title}
        <div>
          {info}
        </div>
      </Title>
      <ImageWrapper>
        <Image src={imageURL} alt={title} />
      </ImageWrapper>
      </Wrapper>
    </div>
  )
}