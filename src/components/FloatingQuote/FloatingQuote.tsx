"use client";

import styles from "./FloatingQuote.module.css";

export default function FloatingQuote() {
  return (
    <a
      href="/contact"  // change to WhatsApp or form link
      className={styles.floating}
    >
      Get a Quote
    </a>
  );
}
