'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';

function TextAppear({
  children,
  subtext,
  withLink
}: {
  children: ReactNode;
  subtext?: string;
  withLink?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-10% 0px -50% 0px' }); // You can adjust this margin for triggering points.

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      ref={ref}
      initial={{ scale: 0.3, opacity: 0.6 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.6 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <h1 className="text">{children}</h1>
      {subtext && <p className="max-w-sm text-xl text-gray-500">{subtext}</p>}

      {withLink && (
        <Link className="mt-4 uppercase text-blue-400" href="">
          Learn More
        </Link>
      )}
    </motion.div>
  );
}

export default TextAppear;
