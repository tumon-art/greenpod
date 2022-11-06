import ShowPod from "../../components/ShowPod";

async function getData() {
  const res = await fetch("https://greenpod.fly.dev/thefirsts");
  return res.json();
}

export default async function page() {
  const { data } = await getData();
  return (
    <div>
      <ShowPod data={data} />
    </div>
  );
}
