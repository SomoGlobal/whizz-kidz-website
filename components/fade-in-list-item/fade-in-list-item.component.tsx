import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInListItem: React.FC = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { delay: 0.075 } },
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
      }}
    >
      {children}
    </motion.li>
  );
};

export default FadeInListItem;
