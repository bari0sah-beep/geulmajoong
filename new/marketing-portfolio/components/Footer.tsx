import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.name}>김마케터</span>
          <span className={styles.role}>Digital Marketing Specialist</span>
        </div>
        <nav className={styles.links}>
          <Link href="/about" className={styles.link}>소개</Link>
          <Link href="/projects" className={styles.link}>프로젝트</Link>
          <Link href="/contact" className={styles.link}>연락처</Link>
        </nav>
        <p className={styles.copy}>© {currentYear} 김마케터. All rights reserved.</p>
      </div>
    </footer>
  );
}
