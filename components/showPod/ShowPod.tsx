"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ShowPod.module.scss";

interface RssTypes {
  data: {
    title: string;
    description: string;
    link: string;
    image: string;
    category: [];
    items: [
      {
        title: string;
        description: string;
        published: string;
        created: string;
        category: [];
        content: string;
        enclosures: [{ lenght: string; type: string; url: string }];
      }
    ];
  };
}

export default function ShowPod({ data }: RssTypes) {
  return (
    <main className={styles.main}>
      <div className={styles.mainHead}>
        <Image
          src={data.image}
          className={styles.mainImg}
          height="40"
          width="40"
          alt="img"
        />
        <Link href={data.link}>
          <h3>{data.title}</h3>
        </Link>
      </div>

      <audio src={data.items[0].enclosures[0].url} preload="metadata"></audio>

      <button>30sec</button>
      <button>play/pause</button>
      <button>30sec</button>
      {/* CURRENT TIME  */}
      <div> 0:00</div>
      {/* PROGRESS BAR */}
      <div>
        <input type="range" />
      </div>
      {/* DURATION */}
      <div>3:00</div>
    </main>
  );
}
