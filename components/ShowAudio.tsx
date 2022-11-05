import { ItemsProps } from "./ShowPod";
import styles from "../styles/ShowAudio.module.scss";
import { useState } from "react";
import Model from "./Model";

export default function ShowAudio({ items }: { items: ItemsProps }) {
  const [showModel, setshowModel] = useState<boolean>(false);

  const stripHtml = (htmlString: string): any => {
    let tmp = document.createElement("div");
    tmp.innerHTML = htmlString;
    return tmp.textContent || tmp.innerText || "";
  };

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

        <span onClick={() => setshowModel(true)}> i </span>
        {showModel && (
          <Model setShowModel={setshowModel}>
            {stripHtml(items.description)}
          </Model>
        )}
      </div>
    </main>
  );
}
