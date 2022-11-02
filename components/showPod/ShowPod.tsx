"use client";
interface Props {
  data: object;
}
export default function ShowPod({ data }: Props) {
  console.log(data);
  return <div> Show Pod</div>;
}
