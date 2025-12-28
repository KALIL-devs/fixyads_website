import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.column}>
                    <h3>Agency.</h3>
                    <p>Transforming businesses with data-driven digital marketing strategies and empowering the next generation with expert training.</p>
                </div>

                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/services#seo">SEO Optimization</Link></li>
                        <li><Link href="/services#smm">Social Media Marketing</Link></li>
                        <li><Link href="/services#ads">Performance Marketing</Link></li>
                        <li><Link href="/services#web-dev">Web Development</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Courses</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/courses/digital-marketing">Digital Marketing Course</Link></li>
                        <li><Link href="/courses/java">Java Programming</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <p>123 Business Avenue, Tech City</p>
                    <p>Email: hello@agency.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Agency Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
