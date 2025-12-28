import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../course.module.css';

export const metadata: Metadata = {
    title: 'Digital Marketing Course | Learn SEO, SMM, PPC',
    description: 'Master Digital Marketing with our comprehensive course. Learn SEO, Social Media, Google Ads, and more with live projects.',
};

export default function DigitalMarketingCourse() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.875rem' }}>Most Popular</span>
                    <h1 className={styles.title} style={{ marginTop: '1rem' }}>Advanced Digital Marketing Course</h1>
                    <p className={styles.subtitle}>
                        Become a certified Digital Marketing expert. Learn from industry leaders and work on real-time projects.
                    </p>
                    <div className={styles.meta}>
                        <span>⏱ 3 Months</span>
                        <span>💻 Online / Offline</span>
                        <span>🎓 Certification</span>
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Book Free Demo Class</Link>
                </div>
            </header>

            <div className="container">
                <div className={styles.contentGrid}>
                    <div className="main-content">
                        <section className="mb-4">
                            <h2>Course Overview</h2>
                            <p>
                                Our Digital Marketing course is designed to transform beginners into professionals. We cover every aspect of digital marketing, from the fundamentals to advanced strategies used by top agencies.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h2>What You Will Learn (Syllabus)</h2>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 1: Introduction to Digital Marketing</div>
                                <p>Understanding the landscape, traditional vs digital marketing, and setting goals.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 2: Website Planning & Creation</div>
                                <p>WordPress basics, domain & hosting, and creating your first website.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 3: Search Engine Optimization (SEO)</div>
                                <p>Keyword research, On-page/Off-page SEO, Technical SEO, and Google Search Console.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 4: Social Media Marketing (SMM)</div>
                                <p>Facebook, Instagram, LinkedIn, and Twitter marketing strategies and content planning.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 5: Search Engine Marketing (SEM/PPC)</div>
                                <p>Google Ads, campaign setup, bidding strategies, and analytics.</p>
                            </div>
                        </section>

                        <div className={styles.projectSection}>
                            <h2>Real-Time Projects</h2>
                            <p>You won't just learn theory. You will work on live projects including:</p>
                            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>Running a live ad campaign with a real budget</li>
                                <li>Optimizing a live website for SEO</li>
                                <li>Creating a social media content calendar for a brand</li>
                            </ul>
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <h3>Course Highlights</h3>
                        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                            <li className="mb-2">✅ 100% Placement Assistance</li>
                            <li className="mb-2">✅ Industry Recognized Certificate</li>
                            <li className="mb-2">✅ 50+ Tools Covered</li>
                            <li className="mb-2">✅ Backup Classes Available</li>
                            <li className="mb-2">✅ Interview Preparation</li>
                        </ul>
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <p className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>₹25,000</p>
                            <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Enroll Now</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
