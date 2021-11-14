import Link from "next/link";
import Sky from "./Sky";

import styles from "../styles/Layout.module.css";

const currentYear = new Date().getFullYear();

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sky />

      <main className={styles.main}>{children}</main>

      <footer className="w-full h-24 mt-auto flex flex-col justify-center items-center bottom-0">
        <div className="flex">
          <p className="mr-2">
            <Link href="/contact">Contact.</Link>
          </p>
          <p className="mr-2">
            <Link href="/resume">Résumé.</Link>
          </p>
          <p>
            <Link href="/about">About.</Link>
          </p>
        </div>
        <div className="my-3">
          <p className="text-sm italic">
            <span>&copy; {currentYear}. All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
