import styles from "./PageHeader.module.css";

const PageHeader: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>JavaScript30 Album</h1>
      <p className={styles.description}>
        Small projects of Wes Bos’{" "}
        <a href="https://javascript30.com/" target="_blank" rel="noreferrer">
          JavaScript30
        </a>{" "}
        but with React and TypeScript.
      </p>
    </section>
  );
};

export default PageHeader;
