'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ParallaxComponent from './parallax-effect';
import TextAppear from './text-appear';
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
    <div ref={videoContainerRef} className="relative h-[500vh]">
      <div className="absolute right-10 top-0 z-10 mt-80">
        <div className="box">
          <TextAppear
            withLink={true}
            subtext="Unsere Drinks halten dich 3-5 Stunden satt und sind perfekt für unterwegs, bei der Arbeit oder auch zu Hause.

"
          >
            Schwarz Kümmel Öl
          </TextAppear>
        </div>
        <div className="box">
          <TextAppear
            withLink={true}
            subtext="Unsere Drinks halten dich 3-5 Stunden satt und sind perfekt für unterwegs, bei der Arbeit oder auch zu Hause.
"
          >
            Algen Öl
          </TextAppear>
        </div>{' '}
        <div className="box">
          <TextAppear
            withLink={true}
            subtext="Unsere Drinks halten dich 3-5 Stunden satt und sind perfekt für unterwegs, bei der Arbeit oder auch zu Hause.
"
          >
            Walnuss Öl
          </TextAppear>
        </div>{' '}
        <div className="box">
          <TextAppear
            withLink={true}
            subtext="Unsere Drinks halten dich 3-5 Stunden satt und sind perfekt für unterwegs, bei der Arbeit oder auch zu Hause.
        "
          >
            Hanf Öl
          </TextAppear>
        </div>
        <TextAppear>Vegan</TextAppear>
        <TextAppear>Helal</TextAppear>
        <TextAppear>Koscher</TextAppear>
      </div>

      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="relative">
          <ParallaxComponent
            className="absolute bottom-0 z-40 hidden md:-bottom-40 md:block"
            speed={100}
            rotationSpeed={50}
          >
            <Image
              className="w-[10vw] transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="150"
              height="150"
            />
          </ParallaxComponent>

          <ParallaxComponent
            className="absolute top-10 z-40 hidden blur-md md:block"
            speed={400}
            rotationSpeed={50}
          >
            <Image
              className="w-[10vw] transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="150"
              height="150"
            />
          </ParallaxComponent>
          <ParallaxComponent
            className="absolute right-20 z-40 hidden blur-md md:block"
            speed={100}
            rotationSpeed={150}
          >
            <Image
              className="w-[10vw] transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="150"
              height="150"
            />
          </ParallaxComponent>

          <ParallaxComponent
            className="absolute bottom-0 z-40 hidden blur-md md:-bottom-40 md:right-10 md:block"
            speed={1000}
            rotationSpeed={250}
          >
            <Image
              className="w-[8vw] transition-transform"
              src="/static/capsule.png"
              alt={'alt'}
              width="150"
              height="150"
            />
          </ParallaxComponent>
          {/* <div className="fade-out-gradient absolute inset-0"></div> */}
          <motion.video
            className="custom-bounce mix-blend-darken"
            ref={videoRef}
            src="/static/tadm.mp4" // Replace with your video path
            style={{ width: '100%' }}
            muted
          />
          {/* <div className="circles absolute bottom-0 left-40 bg-blend-multiply">
            <div className="yellow"></div>
            <div className="orange"></div>
            <div className="pink"></div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollVideo;
