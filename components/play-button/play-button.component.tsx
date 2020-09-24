import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

const PlayButton: React.FC<{ onClick: any }> = ({ onClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const size = '50px';

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
      aria-label="Play Video"
      type="button"
      className="inline-flex items-center justify-center p-2 text-3xl font-bold text-gray-100 rounded-full opacity-100 hover:text-gray-700 hover:bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={size}
        height={size}
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
      <div className="pl-2 pr-4">Play</div>
    </motion.button>
  );
};

export default PlayButton;
