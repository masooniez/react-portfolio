import { useState } from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [animatingIndices, setAnimatingIndices] = useState(new Set());

  const handleMouseEnter = (index) => {
    setAnimatingIndices(prev => new Set([...prev, index]));
  };

  const handleAnimationEnd = (index) => {
    setAnimatingIndices(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx} ${animatingIndices.has(i) ? 'animating' : ''}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onAnimationEnd={() => handleAnimationEnd(i)}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;