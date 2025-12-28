import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../course.module.css';

export const metadata: Metadata = {
    title: 'Java Full Stack Course | Learn Core Java, Spring Boot',
    description: 'Become a Full Stack Java Developer. Learn Core Java, Advanced Java, Spring Boot, Hibernate, and Microservices.',
};

export default function JavaCourse() {
    return (
        <>
            <header className={styles.header} style={{ background: 'linear-gradient(135deg, #e05d44 0%, #c0392b 100%)' }}>
                <div className="container">
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.875rem' }}>High Demand</span>
                    <h1 className={styles.title} style={{ marginTop: '1rem' }}>Java Full Stack Development</h1>
                    <p className={styles.subtitle}>
                        Master the most popular programming language. Build robust, scalable enterprise applications with Java and Spring Boot.
                    </p>
                    <div className={styles.meta}>
                        <span>⏱ 4 Months</span>
                        <span>💻 Online / Offline</span>
                        <span>🎓 Certification</span>
                    </div>
                    <Link href="/contact" className="btn" style={{ background: 'white', color: '#c0392b' }}>Join Demo Class</Link>
                </div>
            </header>

            <div className="container">
                <div className={styles.contentGrid}>
                    <div className="main-content">
                        <section className="mb-4">
                            <h2>Course Overview</h2>
                            <p>
                                This comprehensive course covers everything from the basics of programming to advanced enterprise application development. Perfect for students and career switchers looking to enter the IT industry.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h2>What You Will Learn (Syllabus)</h2>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 1: Core Java</div>
                                <p>OOPs concepts, Collections, Exception Handling, Multithreading, and Java 8 features.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 2: Advanced Java</div>
                                <p>JDBC, Servlets, JSP, and connecting to databases.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 3: Spring Framework</div>
                                <p>Spring Core, Spring MVC, Dependency Injection, and AOP.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 4: Spring Boot & Microservices</div>
                                <p>Building REST APIs, Spring Boot Starters, Microservices architecture, and deployment.</p>
                            </div>

                            <div className={styles.syllabusItem}>
                                <div className={styles.syllabusTitle}>Module 5: Frontend Basics</div>
                                <p>HTML, CSS, JavaScript, and React basics for full stack development.</p>
                            </div>
                        </section>

                        <div className={styles.projectSection}>
                            <h2>Projects Included</h2>
                            <p>Build real-world applications to showcase in your portfolio:</p>
                            <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>E-commerce Backend System</li>
                                <li>Employee Management System</li>
                                <li>Banking Application with Microservices</li>
                            </ul>
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <h3>Why Choose Java?</h3>
                        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
                            <li className="mb-2">✅ High Salary Packages</li>
                            <li className="mb-2">✅ Used by Top MNCs</li>
                            <li className="mb-2">✅ Stable Career Growth</li>
                            <li className="mb-2">✅ 100% Placement Support</li>
                            <li className="mb-2">✅ Mock Interviews</li>
                        </ul>
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <p className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c0392b' }}>₹30,000</p>
                            <Link href="/contact" className="btn" style={{ width: '100%', background: '#c0392b', color: 'white' }}>Enroll Now</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
