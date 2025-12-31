'use client';

import { useMemo } from 'react';
import styles from './BubblesCloud.module.css';

interface Bubble {
  img: string;
  size: number;
  top: number;
  left: number;
}

const bubbleImages = [
  '/bubbles/analytics.png',
  '/bubbles/searchconsole.png',
  '/bubbles/trends.png',
  '/bubbles/tag.png',
  '/bubbles/lockerstudio.png',
  '/bubbles/gemini.png',
  '/bubbles/lighthouse.png',
  '/bubbles/aistudio.png',
  '/bubbles/notebook.png',
  '/bubbles/googleads.png'
];

const MAX_ATTEMPTS = 50;
const MIN_GAP = 14;

const BubblesCloud = () => {
  const bubbles = useMemo<Bubble[]>(() => {
    const placed: Bubble[] = [];

    bubbleImages.forEach((img) => {
      const size = Math.floor(Math.random() * 40) + 70;

      let bubble: Bubble;
      let attempts = 0;

      do {
        bubble = {
          img,
          size,
          top: Math.random() * 80,
          left: Math.random() * 80
        };

        attempts++;
      } while (
        attempts < MAX_ATTEMPTS &&
        placed.some((b) => {
          const dx = (bubble.left - b.left) * 5;
          const dy = (bubble.top - b.top) * 5;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < (bubble.size + b.size) / 2 + MIN_GAP;
        })
      );

      placed.push(bubble);
    });

    return placed;
  }, []);

  return (
    <div className={styles.wrapper}>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={styles.bubble}
        style={{
          width: bubble.size,
          height: bubble.size,
          top: `${bubble.top}%`,
          left: `${bubble.left}%`,

          // 🎈 random floating behavior
          ['--float-range' as any]: `${Math.random() * 10 + 8}px`,   // 8–18px
          ['--float-duration' as any]: `${Math.random() * 4 + 5}s`, // 5–9s
          ['--float-delay' as any]: `${Math.random() * 2}s`,        // 0–2s
        }}
        >
          <img src={bubble.img} alt="Bubble icon" />
        </div>
      ))}
    </div>
  );
};

export default BubblesCloud;
