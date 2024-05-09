'use client';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='w-1/4 h-96 bg-pink-100'>
      <ReactCardFlip isFlipped={isFlipped}>
        <div
          className='h-96 flex justify-center items-center even:bg-contrast-400 odd:bg-contrast-500'
          onClick={handleClick}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick();
            }
          }}>
          <h1 className='text-white font-bold text-2xl'>{frontContent}</h1>
        </div>
        <div
          className='h-96 flex justify-center items-center even:bg-contrast-400 odd:bg-contrast-500'
          onClick={handleClick}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick();
            }
          }}>
          {backContent}
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
