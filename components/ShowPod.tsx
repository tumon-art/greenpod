import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ShowPod.module.scss";
import ShowAudio from "./ShowAudio";

export interface ItemsProps {
  title: string;
  description: string;
  published: string;
  created: string;
  category: [];
  content: string;
  enclosures: [{ lenght: string; type: string; url: string }];
}
export interface RssTypes {
  title: string;
  description: string;
  link: string;
  image: string;
  category: [];
  items: ItemsProps[];
}

export default function ShowPod({ data }: { data: RssTypes }) {
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

      {data.items.slice(0, 3).map((items: ItemsProps, i: any) => {
        return <ShowAudio items={items} key={i} />;
      })}
    </main>
  );
}
