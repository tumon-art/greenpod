import styles from "../styles/Home.module.scss";
import ShowPod from "./ShowPod";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   return res.json();
// }

export default async function Page() {
  // const { data } = await getData();
  return (
    <main>
      <ShowPod />
    </main>
  );
}
