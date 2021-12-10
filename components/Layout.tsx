import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Sky from "./Sky";

import styles from "../styles/Layout.module.css";

const currentYear = new Date().getFullYear();

const ActivePath: React.FC<{ path: string; title: string }> = ({
  path,
  title,
}) => {
  const router = useRouter();
  return (
    <p
      className={`mr-2 ${
        router.asPath === path ? "border-b-4 text-gray-100" : ""
      }`}
    >
      <Link href={path}>{title}</Link>
    </p>
  );
};

const Layout: React.FC = ({ children }) => {
  const [extraLinksEnabled, _] = useState(
    process.env.NODE_ENV !== "production"
  );
  return (
    <div className={styles.container}>
      <Sky />

      <main className={styles.main}>{children}</main>

      <footer className="w-full h-24 mt-auto flex flex-col justify-center items-center bottom-0">
        <div className="flex">
          <ActivePath path="/" title="Home." />
          <ActivePath path="/contact" title="Contact." />
          {extraLinksEnabled && (
            <>
              <ActivePath path="/resume" title="Résumé." />
              <ActivePath path="/about" title="About." />
            </>
          )}
        </div>
        <div className="my-2">
          <p className="text-sm italic">
            <span>&copy; {currentYear}. All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
