'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useScrollVideo } from '@/hooks/useScrollVideo';

export default function ServicesPage() {
  const seo = useScrollVideo();
  const smm = useScrollVideo();
  const web = useScrollVideo();

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.headerTitle}>Our Services</h1>
          <p className={styles.headerSubtitle}>
            We offer a full suite of digital solutions designed to help your business grow.
          </p>
        </div>
      </header>

      <div className="container">
        {/* SEO */}
        <section ref={seo.sectionRef} className={styles.serviceSection}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <h2>Search Engine Optimization (SEO)</h2>
              <p>Improve your visibility on Google and drive organic traffic.</p>

              <ul className={styles.featureList}>
                <li>Keyword Research</li>
                <li>Technical SEO</li>
                <li>Link Building</li>
                <li>Local SEO</li>
              </ul>

              <Link href="/contact" className="btn btn-primary">
                Get Free SEO Audit
              </Link>
            </div>

            <div className={styles.videoBox}>
              <video
                ref={seo.videoRef}
                src="/Services_videos/SEO.mp4"
                muted
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </section>

        {/* SMM */}
        <section ref={smm.sectionRef} className={styles.serviceSection}>
          <div className={styles.serviceGrid}>

            <div className={styles.videoBox}>
              <video
                ref={smm.videoRef}
                src="/Services_videos/SMM.mp4"
                muted
                playsInline
                preload="auto"
              />
            </div>

            <div className={styles.serviceContent}>
              <h2>Social Media Marketing</h2>
              <p>Build brand awareness and grow your community.</p>

              <ul className={styles.featureList}>
                <li>Content Strategy</li>
                <li>Community Management</li>
                <li>Influencer Marketing</li>
                <li>Paid Campaigns</li>
              </ul>

              <Link href="/contact" className="btn btn-primary">
                Start Growing
              </Link>
            </div>


          </div>
        </section>

        {/* Web Dev */}
        <section ref={web.sectionRef} className={styles.serviceSection}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <h2>Website Development</h2>
              <p>Fast, secure, and conversion-focused websites.</p>

              <ul className={styles.featureList}>
                <li>Custom Design</li>
                <li>E-commerce</li>
                <li>Landing Pages</li>
                <li>Maintenance</li>
              </ul>

              <Link href="/contact" className="btn btn-primary">
                Build Your Site
              </Link>
            </div>

            <div className={styles.videoBox}>
              <video
                ref={web.videoRef}
                src="/Services_videos/WebDesign.mp4"
                muted
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2>Ready to take your business to the next level?</h2>
          <p>Book a free consultation with our experts today.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
