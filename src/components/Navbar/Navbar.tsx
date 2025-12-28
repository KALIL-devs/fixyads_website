import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
            <img 
                src="/Logo/HeadLogo.png" 
                alt="fixyads Digital Solutions Logo" 
                className={styles.logoImage} 
            />
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/courses/digital-marketing" className={styles.navLink}>Courses</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
        </nav>
          
        <nav>
          <Link href="/contact" className="btn btn-primary">Get Free Audit</Link>
        </nav>

        <button className={styles.mobileMenuBtn} aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
