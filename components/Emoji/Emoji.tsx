import styles from "./Emoji.module.css";

interface EmojiProps {
  name: string;
}

const Emoji: React.FC<EmojiProps> = ({ children, name }) => {
  return (
    <span className={styles.emoji} role="img" aria-label={name}>
      {children}
    </span>
  );
};

export default Emoji;
