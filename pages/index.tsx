import styles from "../styles/Home.module.scss";
import ShowPod from "../components/ShowPod";
import Header from "../components/Header";

export async function getStaticProps() {
  const res = await fetch("https://newsstand.fly.dev/greenpod");

  const data = await res.json();
  return { props: { data: data.data } };
}

export default function Home({ data }: { data: any }) {
  console.log(data);
  return (
    <main>
      <Header />
      <ShowPod data={data} />
    </main>
  );
}
