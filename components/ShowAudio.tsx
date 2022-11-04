import { ItemsProps } from "./ShowPod";
import styles from "../styles/ShowAudio.module.scss";

export default function ShowAudio({ items }: { items: ItemsProps }) {
  return (
    <main className={styles.main}>
      <div className={styles.cardHold}>
        <h4 className={styles.h4}> {items.title} </h4>
        <audio
          className={styles.audio}
          src={items.enclosures[0].url}
          controls
          preload="none"
        ></audio>
      </div>
    </main>
  );
}
