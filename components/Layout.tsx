import Link from "next/link";
import Sky from "./Sky";

import styles from "../styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sky />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>
          <Link href="/contact">Contact.</Link>
        </p>
        <p>
          <Link href="/resume">Résumé.</Link>
        </p>
        <p>
          <Link href="/about">About.</Link>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
