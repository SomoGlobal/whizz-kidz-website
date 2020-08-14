import React from 'react';
import { motion } from 'framer-motion';

export interface IPatternPieceSimpleSlideProps {
  direction?: string;
  colors?: string[];
}

const defaultColors = ['bg-blue-400', 'bg-blue-900'];

const PatternPieceSimpleSlide: React.FC<IPatternPieceSimpleSlideProps> = ({
  direction = 'right',
  colors = defaultColors,
}) => {
  const d = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'down' || direction === 'left' ? '-100%' : '100%';

  return (
    <div className={`h-full w-full overflow-hidden ${colors[0]}`}>
      <motion.div
        className={`h-full w-full ${colors[1]}`}
        animate={{ [d]: value }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default PatternPieceSimpleSlide;
