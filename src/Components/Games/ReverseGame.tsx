import React from 'react';
import { Title, Wrapper, Image, ImageWrapper } from './ReverseGame.styles';

interface Props {
  title: string;
  info: string;
  imageURL: string;
}

export const ReverseGame: React.FC<Props> = ({ imageURL, title, info }) => {
  return (
    <div>
      <Wrapper>
      <ImageWrapper>
        <Image src={imageURL} alt={title} />
      </ImageWrapper>
      <Title>
        {title}
        <div>
          {info}
        </div>
      </Title>

      </Wrapper>
    </div>
  )
}