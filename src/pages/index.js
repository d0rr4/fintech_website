import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import Homepage from "./homepage";
import About from "./about";
import Departments from "./departments";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full flex min-h-screen flex-col justify-between">
      <Head>
        <title>Home</title>
      </Head>

      <div className="w-full flex h-full flex-col">
        <Homepage className="flex-grow" />
        <About className="flex-grow" />
        <Departments className="flex-grow" />
        <Contact className="flex-grow" />
      </div>
    </div>
  );
}
