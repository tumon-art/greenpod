import { ItemsProps } from "./ShowPod";
import styles from "../styles/ShowAudio.module.scss";

export default function ShowAudio({ items }: { items: ItemsProps }) {
  console.log(items);
  return (
    <main className={styles.main}>
      <div className={styles.cardHold}>
        <h4 className={styles.h4}> {items.title} </h4>
        <p> - {items.itunes_author} </p>
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
