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
    items: [];
  };
}

export default function ShowPod({ data }: RssTypes) {
  console.log(data);
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
    </main>
  );
}
