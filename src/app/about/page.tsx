import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About Us | Digital Marketing Agency',
    description: 'Learn about our journey, mission, and the team behind our success. We are dedicated to delivering results and empowering students.',
};

export default function AboutPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>About Our Agency</h1>
                    <p className={styles.heroText}>
                        We are a team of passionate digital marketers, developers, and educators committed to helping businesses grow and students succeed.
                    </p>
                </div>
            </section>

            <section className={`${styles.section} container`}>
                <div className={styles.grid}>
                    <div className={styles.imagePlaceholder}>Team Photo</div>
                    <div>
                        <h2>Our Story</h2>
                        <p className="mb-4">
                            Founded in 2020, we started with a simple mission: to bridge the gap between industry requirements and available talent while providing top-notch digital services to businesses.
                        </p>
                        <p className="mb-4">
                            Over the years, we have helped 100+ businesses scale their revenue and trained 500+ students who are now working in top MNCs.
                        </p>

                        <h3 className="mb-2">Our Mission</h3>
                        <p className="mb-4">To empower businesses with data-driven strategies and individuals with career-defining skills.</p>

                        <h3 className="mb-2">Our Vision</h3>
                        <p>To be the most trusted digital partner and training institute globally.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className={styles.stats}>
                    <div>
                        <div className={styles.statNumber}>100+</div>
                        <div className={styles.statLabel}>Clients Served</div>
                    </div>
                    <div>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Students Trained</div>
                    </div>
                    <div>
                        <div className={styles.statNumber}>95%</div>
                        <div className={styles.statLabel}>Success Rate</div>
                    </div>
                    <div>
                        <div className={styles.statNumber}>50+</div>
                        <div className={styles.statLabel}>Team Members</div>
                    </div>
                </div>
            </div>

            <section className={`${styles.section} container`}>
                <h2 className="text-center mb-4">Meet Our Team</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.teamMember}>
                        <div className={styles.memberImage}>Photo</div>
                        <div className={styles.memberName}>John Doe</div>
                        <div className={styles.memberRole}>Founder & CEO</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberImage}>Photo</div>
                        <div className={styles.memberName}>Jane Smith</div>
                        <div className={styles.memberRole}>Head of Marketing</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberImage}>Photo</div>
                        <div className={styles.memberName}>Mike Ross</div>
                        <div className={styles.memberRole}>Lead Instructor (Java)</div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberImage}>Photo</div>
                        <div className={styles.memberName}>Sarah Lee</div>
                        <div className={styles.memberRole}>SEO Specialist</div>
                    </div>
                </div>
            </section>
        </>
    );
}
