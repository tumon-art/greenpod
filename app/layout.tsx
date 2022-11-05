import { Inter } from "@next/font/google";
import Header from "../components/Header";

import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="GreenPod" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
