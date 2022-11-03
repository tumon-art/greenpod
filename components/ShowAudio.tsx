import { ItemsProps } from "./ShowPod";
import styles from "../styles/ShowAudio.module.scss";

export default function ShowAudio({ items }: { items: ItemsProps }) {
  return (
    <main className={styles.main}>
      <div className={styles.cardHold}>
        <h4 className={styles.h4}> {items.title} </h4>
        <audio
          className={styles.audio}
          controls
          src={items.enclosures[0].url}
          preload="metadata"
        ></audio>
      </div>
    </main>
  );
}
