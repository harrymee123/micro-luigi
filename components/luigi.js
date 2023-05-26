import styles from "../styles/Luigi.module.css";

const Luigi = () => {
  return (
    <main className={styles.main}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png"
        alt="Luigi"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>G'day! I'ma Luigi. CHANGE</h1>
      <span>
        I'm hosted at{" "}
        <a target="_blank" href="http://localhost:3002/luigi">
          http://localhost:3002/luigi
        </a>
      </span>
    </main>
  );
};

export default Luigi;