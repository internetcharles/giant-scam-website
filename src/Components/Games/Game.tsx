import React from 'react';

interface Props {
  title: string;
  info: string;
  imageURL: string;
}

export const Game: React.FC<Props> = ({ imageURL, title }) => {
  return (
    <div>
      <div>
        <img src={imageURL} alt={title} />
      </div>
    </div>
  )
}