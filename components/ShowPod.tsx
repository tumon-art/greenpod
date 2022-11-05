"use client";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import Globe from "../store/svg/Globe";
import styles from "../styles/ShowPod.module.scss";
import Pagination from "./Pagination";
import ShowAudio from "./ShowAudio";

export interface ItemsProps {
  title: string;
  description: string;
  published: string;
  created: string;
  category: [];
  content: string;
  enclosures: [{ lenght: string; type: string; url: string }];
  itunes_author: string;
  itunes_duration: number;
  itunes_episode: number;
  itunes_episodeType: "full";
}
export interface RssTypes {
  title: string;
  description: string;
  link: string;
  image: string;
  category: [];
  items: ItemsProps[];
}

async function getData() {
  // const res = await fetch("http://localhost:3000/api/hello");
  // const res = await fetch("https://newsstand.fly.dev/greenpod");
  const res = await fetch("https://greenpod-five.vercel.app/api/hello");
  const { data }: { data: RssTypes } = await res.json();
  return data;
}

export default function ShowPod() {
  const data = use(getData());

  const [currentPage, setcurrentPage] = useState<number>(1);
  const [itemsPerPage, setitemsPerPage] = useState<number>(8);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage; // 6
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 0
  const currentItems: ItemsProps[] = data.items.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // CHANGE PAGE
  const paginate = (pageNumber: number) => {
    setcurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainHead}>
        <Image
          className={styles.mainImg}
          src={data.image}
          height="70"
          width="70"
          alt="img"
        />

        <div className={styles.gridSect2}>
          <h3>{data.title}</h3>
          <Link href={data.link} passHref>
            <div className={styles.visitWeb}>
              <Globe style={{ color: "green", height: "20px" }} />
              <p> Visit website</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.audioCardHold}>
        {currentItems.map((items: ItemsProps, i: any) => {
          return <ShowAudio items={items} key={i} />;
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.items.length}
        paginate={paginate}
      />
    </main>
  );
}
