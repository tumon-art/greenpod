import { Inter } from "@next/font/google";
import "../styles/globals.scss";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Create Next App</title>
        <meta name="description" content="GreenPod" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
