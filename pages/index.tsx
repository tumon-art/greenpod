import styles from "../styles/Home.module.scss";
import ShowPod from "../components/ShowPod";

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

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello");

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
