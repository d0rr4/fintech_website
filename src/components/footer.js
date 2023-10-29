import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-darkBlue py-6 grid grid-cols-3">
      <div className="max-w-screen-lg mx-auto px-2 flex flex-col justify-center items-start">
        <div className="flex mt-5">
          <Image
              src="/images/mail.png"
              alt="mail"
              width={40}
              height={20}
            />
          <p className="text-white ml-2">fintech.ibcm@gmail.com</p>
        </div>
        <div className="flex mt-5">
          <Image
            src="/images/location.png"
            alt="mail"
            width={50}
            height={10}
          />
          <p className="text-white">Constructor University<br />Campus Ring 1, Bremen</p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 text-center mt-20">
        {/* <p className="text-white">© 2023 FinTech. All rights reserved.</p> */}
      </div>
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-end">
        <h1 className="text-white text-xl">
          Let's Connect
        </h1>
        <div className="flex space-x-8 mt-5">
          <a
            href="https://instagram.com/fintech_ibcm?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instaw.png"
              alt="Instagram"
              width={38}
              height={38}
            />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/lkdw.png"
              alt="LinkedIn"
              width={36}
              height={36}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
