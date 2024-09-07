'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end']
  });

  // Map scroll progress (0 to 1) to video playback (0% to 100%)
  const playbackProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScrollChange = (progress: number) => {
      if (!videoRef.current || !videoContainerRef.current) {
        return;
      }

      const duration = videoRef.current.duration;

      videoRef.current.currentTime = progress * duration;
    };

    return playbackProgress.on('change', handleScrollChange);
  }, [playbackProgress]);

  return (
    <div ref={videoContainerRef} className="h-[300vh]">
      <motion.div
        className="custom-bounce"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.video
          ref={videoRef}
          src="https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4" // Replace with your video path
          style={{ width: '100%' }}
          muted
        />
      </motion.div>
    </div>
  );
};

export default ScrollVideo;
