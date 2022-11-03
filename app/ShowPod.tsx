"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ShowPod.module.scss";

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

export default function ShowPod() {
  const [isPlaying, setisPlaying] = useState<boolean>(false);

  const [data, setData] = useState<RssTypes | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://greenpod-five.vercel.app/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  const audioPlayer = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    setisPlaying((p) => !p);

    if (isPlaying) {
      audioPlayer.current?.play();
    } else audioPlayer.current?.pause();
  };

  // return (
  //   <main>
  //     <span> shello </span>
  //   </main>
  // );
  return (
    <main className={styles.main}>
      <div className={styles.mainHead}>
        <Image
          src={data.data.image}
          className={styles.mainImg}
          height="40"
          width="40"
          alt="img"
        />
        <Link href={data.data.link}>
          <h3>{data.data.title}</h3>
        </Link>
      </div>

      {/* === AUDIO PLAYER === */}
      <audio
        ref={audioPlayer}
        src={data.data.items[0].enclosures[0].url}
        preload="metadata"
      ></audio>

      <div>
        <audio controls>
          <source
            src={data.data.items[0].enclosures[0].url}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* <button>30sec</button> */}
      {/* <button onClick={togglePlayPause}>{isPlaying ? "pause" : "play"}</button> */}
      {/* <button>30sec</button> */}
      {/* CURRENT TIME  */}
      {/* <div> 0:00</div> */}
      {/* PROGRESS BAR */}
      {/* <div> */}
      {/* <input type="range" /> */}
      {/* </div> */}
      {/* DURATION */}
      {/* <div>3:00</div> */}
    </main>
  );
}
