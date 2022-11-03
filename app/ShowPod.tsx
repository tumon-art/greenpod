"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ShowPod.module.scss";

interface RssTypes {
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
}

export default function ShowPod() {
  const [isPlaying, setisPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [data, setData] = useState<RssTypes | null>(null);
  const [isLoading, setLoading] = useState(false);

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    setisPlaying((p) => !p);

    if (!isPlaying) {
      audioPlayer.current?.play();
    } else audioPlayer.current?.pause();
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (audioPlayer.current) {
      console.log(audioPlayer.current.duration);
      // progressBar.current.max = seconds;
    }
  }, [audioPlayer.current?.onloadedmetadata, audioPlayer.current?.readyState]);

  const calculateTime = (secs: any) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

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

      {/* === AUDIO PLAYER === */}

      <div>
        <audio
          ref={audioPlayer}
          src={data.items[0].enclosures[0].url}
          onLoadedMetadata={() => {
            if (audioPlayer.current) {
              const seconds = Math.floor(audioPlayer.current!.duration);
              setDuration(seconds);
            }
          }}
          preload="metadata"
        ></audio>
      </div>

      {/* <button>30sec</button> */}
      <button onClick={togglePlayPause}>{isPlaying ? "pause" : "play"}</button>
      {/* <button>30sec</button> */}
      {/* CURRENT TIME  */}
      {/* <div> 0:00</div> */}
      {/* PROGRESS BAR */}
      {/* <div> */}
      {/* <input type="range" /> */}
      {/* </div> */}
      {/* DURATION */}
      <div>{calculateTime(duration)}</div>
    </main>
  );
}
