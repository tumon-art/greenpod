"use client";
import styles from "./Header.module.scss";

export default function Header({ data }: { data: object }) {
  console.log(data);
  return (
    <div className={styles.main}>
      <h1 className={styles.name}> GreenPod</h1>
    </div>
  );
}
