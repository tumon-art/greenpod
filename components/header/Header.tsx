import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.main}>
      <h1 className={styles.name}> GreenPod</h1>
    </div>
  );
}
