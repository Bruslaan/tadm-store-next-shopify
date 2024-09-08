'use client';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

function TextAppear({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-10% 0px -50% 0px' }); // You can adjust this margin for triggering points.

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.3, opacity: 1 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <h1 className="text cursor-pointer">{children}</h1>
    </motion.div>
  );
}

export default TextAppear;
