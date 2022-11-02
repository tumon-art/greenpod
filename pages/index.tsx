import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const get = () => {
    fetch("http://localhost:3000/api/hello")
      .then((response) => response.json())
      .then((data) => console.log(data.data));
  };

  setTimeout(() => {
    get();
  }, 0);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="GreenPod" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
