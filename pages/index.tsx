import styles from "../styles/Home.module.scss";
import ShowPod from "../components/ShowPod";

export async function getStaticProps() {
  const res = await fetch("https://newsstand.fly.dev/greenpod");

  const data = await res.json();
  return { props: { data: data.data } };
}

export default function Home({ data }: { data: any }) {
  return (
    <main>
      <br></br>

      <ShowPod data={data} />
    </main>
  );
}
