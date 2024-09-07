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
    if (!videoRef.current || !videoContainerRef.current) return;

    let frameId: number;

    const handleScrollChange = (progress: number) => {
      const duration = videoRef.current!.duration;
      frameId = requestAnimationFrame(() => {
        videoRef.current!.currentTime = progress * duration;
      });
    };

    return playbackProgress.on('change', handleScrollChange);
  }, [playbackProgress]);

  return (
    <div ref={videoContainerRef} className="relative h-[400vh]">
      <div className="absolute right-10 top-0 z-10 mt-80">
        <div className="box">
          <p className="text">Schwarz Kümmel</p>
        </div>
        <div className="box">
          <p className="text">Algen Öl</p>
        </div>
        <div className="box">
          <p className="text">Walnuss Öl</p>
        </div>
        <div className="box">
          <p className="text">Hanf Öl</p>
        </div>
        <div className="box">
          <p className="text">Vegane Kapsel</p>
        </div>
      </div>

      <motion.div
        style={{
          background: 'white',
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="relative">
          <motion.video
            className="custom-bounce"
            ref={videoRef}
            src="https://res.cloudinary.com/dtvtmykeg/video/upload/v1718573595/tadm_skbkly.mp4" // Replace with your video path
            style={{ width: '100%' }}
            muted
          />
          <div className="circles absolute bottom-0 right-40 bg-blend-multiply">
            <div className="yellow"></div>
            <div className="orange"></div>
            <div className="pink"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollVideo;
