import React from "react";
import styles from "styles/components/Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      Powered by{" "}
      <a href="https://wpengine.com" target="_blank" rel="noopener noreferrer">
        WP Engine
      </a>
    </footer>
  );
}
