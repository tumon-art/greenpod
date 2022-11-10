import styles from "../styles/Home.module.scss";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   return res.json();
// }

export default async function Page() {
  // const { data } = await getData();

  return (
    <main>
      <div className={styles.container}>
        <button className={styles.button}>Show More Items</button>
      </div>
    </main>
  );
}
