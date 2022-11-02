// import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.scss";

export default function Page() {
  //   const get = () => {
  //     fetch("http://localhost:3000/api/hello")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data.data));
  //   };

  //   setTimeout(() => {}, 0);

  return (
    <main>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="GreenPod" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />
    </main>
  );
}
