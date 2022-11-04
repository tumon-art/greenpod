import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [itemsPerPage, setitemsPerPage] = useState<number>(6);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage; // 6
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 0
  const currentItems: ItemsProps[] = data.items.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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

      {currentItems.map((items: ItemsProps, i: any) => {
        return <ShowAudio items={items} key={i} />;
      })}
    </main>
  );
}
