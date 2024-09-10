'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const ParallaxComponent = ({
  children,
  speed,
  rotationSpeed,
  className
}: {
  children: ReactNode;
  speed: number;
  rotationSpeed?: number;
  className?: string;
}) => {
  // Track scroll progress

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Apply transformation to create parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotationSpeed]);

  console.log({ y });

  return (
    <motion.div
      className={className}
      style={{
        y,
        rotate
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxComponent;
