import Link from "next/link";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <Link href="/" passHref>
            <a>
              <span className={styles.logo}>cyishere</span>portfolio
            </a>
          </Link>
        </h1>
        <a href="https://cyishere.dev">Back to cyishere.dev</a>
      </div>
    </header>
  );
};

export default Header;
