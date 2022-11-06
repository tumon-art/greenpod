import ShowPod from "../../components/ShowPod";

async function getData() {
  const res = await fetch("https://greenpod.fly.dev/onepath");
  return res.json();
}

export default async function onepath() {
  const { data } = await getData();

  return (
    <div>
      <ShowPod data={data} />
    </div>
  );
}
