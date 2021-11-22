import styles from "./Footer.module.css";
import Emoji from "../Emoji";
import SocialIcon from "./SocialIcon";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.infoList}>
          <li>&copy; 2021.</li>
          <li>
            Made with <Emoji name="coffee">☕</Emoji> &{" "}
            <Emoji name="cat">🐈</Emoji> in Tianjin, China.
          </li>
        </ul>

        <ul className={styles.socialList}>
          <li>
            <a
              href="https://twitter.com/cyishere"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon iconUrl="/icons/twitter.svg" text="CY's Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cyishere"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon iconUrl="/icons/github.svg" text="CY's GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/cyishere"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon iconUrl="/icons/codepen.svg" text="CY's CodePen" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
