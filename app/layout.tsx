import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Fasika Dagnachew",
  description: "My personal portfolio",
  icons: "https://avatars.githubusercontent.com/u/72998972?v=4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}
