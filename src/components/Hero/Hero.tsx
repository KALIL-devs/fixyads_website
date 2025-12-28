'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // 50% of hero visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.content}>

            {/* <span className={styles.badge}>Digital Marketing & Training</span> */}
            <h1 className={styles.title}>
              Grow Your <span className={styles.highlight}>Business</span> with  
              {' '}
              <span className={styles.highlight}>Effective</span> <span className={styles.orangehighlight}>Digital Marketing</span>
            </h1>
            <p className={styles.description}>
              We provide top-notch digital marketing services and industry-ready
              training courses to help you succeed in the digital world.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Get Free Audit
              </Link>
              <Link href="/courses/digital-marketing" className="btn btn-outline">
                Join Free Demo Class
              </Link>
            </div>
          </div>

          {/* <video
            ref={videoRef}
            src="/Services_videos/SEO.mp4"
            muted
            playsInline
            preload="auto"
            style={{ width: '100%', display: 'block' }}
          /> */}
          <div style={{ width: '130%', height: 'auto', display:'block', marginTop:'15px'}}>
            <img src="/Hero_images_planner/image-1.png" alt="Hero Image"/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;