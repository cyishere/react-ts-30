import Link from "next/link";
import { Twitter, GitHub, Codepen } from "react-feather";

import styles from "./Footer.module.css";
import Emoji from "../Emoji";

const Footer: React.FC = () => {
  const createdAt = new Date("2021").getFullYear();
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>
            &copy;{" "}
            {createdAt === thisYear ? thisYear : `${createdAt} - ${thisYear}`}
          </p>
          <p>
            Made with <Emoji name="coffee">☕</Emoji> &{" "}
            <Emoji name="cat">🐈</Emoji> in Tianjin, China.
          </p>
        </div>
        <div className={styles.socialLinks}>
          <Link href="https://twitter.com/cyishere" passHref>
            <a className={styles.socialIcon}>
              <Twitter size={30} />
            </a>
          </Link>
          <Link href="https://github.com/cyishere" passHref>
            <a className={styles.socialIcon}>
              <GitHub size={30} />
            </a>
          </Link>
          <Link href="https://codepen.io/cyishere" passHref>
            <a className={styles.socialIcon}>
              <Codepen size={30} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
