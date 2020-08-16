import React from 'react';
import PatternPieceSimpleSlide from '../pattern-piece-simple-slide';

export interface IPuzzleProps {
  animated?: boolean;
}

const Puzzle: React.FC<IPuzzleProps> = () => {
  return (
    <div className="grid w-full h-full grid-cols-2">
      <PatternPieceSimpleSlide
        direction="up"
        colors={['bg-blue-500', 'bg-green-500']}
      />
      <PatternPieceSimpleSlide
        direction="down"
        colors={['bg-purple-500', 'bg-indigo-700']}
      />
      <div className="grid w-full h-full grid-cols-2">
        <PatternPieceSimpleSlide
          direction="up"
          colors={['bg-red-600', 'bg-indigo-900']}
        />
        <PatternPieceSimpleSlide
          direction="down"
          colors={['bg-blue-700', 'bg-indigo-900']}
        />
        <PatternPieceSimpleSlide
          direction="left"
          colors={['bg-pink-700', 'bg-indigo-900']}
        />
        <PatternPieceSimpleSlide
          direction="right"
          colors={['bg-indigo-700', 'bg-indigo-900']}
        />
      </div>
      <PatternPieceSimpleSlide
        direction="down"
        colors={['bg-yellow-500', 'bg-orange-500']}
      />
    </div>
  );
};

export default Puzzle;
