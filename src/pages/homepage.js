import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";

export default function Homepage() {
  return (
    <div id="homepage">
      <div className="relative min-h-screen">
        <div className="absolute top-15 left-0 w-full h-full flex justify-center items-center flex-col bg-white bg-opacity-30">
          <div className="flex md:justify-start w-full p-8">
            <div className="flex flex-col space-y-3">
              <a
                href="https://instagram.com/fintech_ibcm?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/insta.png"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/lkd.png"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </a>
              <Link href="/">
                <Image
                  src="/images/phone.png"
                  alt="call"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="w-full h-full flex justify-start items-center text-center md:p-16">
            <div className="text-4xl md:text-5xl font-bold text-darkBlue mb-40 ml-20">
              <h1> Transforming Finance </h1>
              <span className="block mt-4"> Through Technology </span>
              <button type="button"
                className="rounded-full mt-6 bg-finRed text-2xl inline-flex items-center text-white hover:text-gray-300 px-6 py-3.5 md:mb-20 transition duration-300 ease-in-out"
              >
                <p> Join the Fintech Society now! </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
