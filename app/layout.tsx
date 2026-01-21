import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Portfolio website complete",
  description: "Personal portfolio"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} bg-base font-poppins text-[0.938rem] text-text min-[968px]:text-[1rem] m-12 max-[585px]:m-4 overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
