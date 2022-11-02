import { Inter } from "@next/font/google";
import Header from "../components/header/Header";
import "../styles/globals.scss";

const inter = Inter();

interface Props {
  children: React.ReactNode;
}
async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");
  return res.json();
}

export default async function RootLayout({ children }: Props) {
  const data = await getData();
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="GreenPod" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header data={data} />
        {children}
      </body>
    </html>
  );
}
