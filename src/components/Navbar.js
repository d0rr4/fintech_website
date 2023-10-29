// "use client";
// import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
// import { RxCross1 } from "react-icons/rx";
// import Link from "next/link";
// import Dropdown from "./Dropdown";
// import Image from "node_modules/next/image";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   const menu = [
//     { name: "Home", url: "/" },
//     { name: "About Us", url: "/about" },
//     { name: "Departments", url: "/departments" },
//     { name: "Contact Us", url: "/contact" },
//   ];
//   return (
//     <nav className="w-full mx-0 sm:px-0">
//         <div className="justify-between mx-auto lg:max-w-8xl md:items-center md:flex md:px-10">
//             <div className="relative">
//                 <div className="flex items-center justify-between py-3 md:py-4 md:block">
//                     <a href="/" className="">
//                     <div class="avatar">
//                         <div class="w-16 rounded">
//                             <Image
//                                 src="/images/Logo1.png"
//                                 alt="logo"
//                                 width={80}
//                                 height={80}
//                             />
//                         </div>
//                     </div>
//                     </a>
//                     <div className="md:hidden">
//                         <button
//                             className="p-3 outline-none focus:border"
//                             onClick={() => setNavbar(!navbar)}
//                         >
//                             {navbar ? (
//                             <RxCross1 className="text-white" />
//                             ) : (
//                             <AiOutlineMenu className="text-white" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div
//                     className={`flex-1 md:flex md:pb-8 md:mt-8 md:ml-auto md:w-full ${
//                     navbar ? "block" : "hidden"
//                     }`}
//                 >
//                     <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                     {menu.map(({ name, url, dropdown }, index) => (
//                         <li key={index} className="text-darkBlue">
//                         {dropdown ? (
//                             <Dropdown name={name} dropdownItems={dropdown} />
//                         ) : (
//                             <Link href={url}>{name}</Link>
//                         )}
//                         </li>
//                     ))}
//                     <RiSearchLine className="search-icon " />
//                     </ul>
//                 </div>
//                 <div className="border-b border-white flex-1 md:items-stretch md:justify-end md:flex relative sm:hidden"></div>
//             </div>
//         </div>
//     </nav>
//   );
// };
// export default Navbar;

"use client";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="max-w-10xl mx-0 sm:px-0">
          <div className="relative flex items-center justify-left h-15">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden justify-end">
              <button
                type="button"
                className="inline-flex items-end justify-center p-2 rounded-md text-finRed hover:text-darkBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-left">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/images/Logo .png"
                    alt="logo"
                    width={180}
                    height={180}
                  />
                </Link>
              </div>
            </div>
            <div className="border-b border-white flex-1 sm:items-stretch sm:justify-end hidden sm:flex absolute right-0">
              <div className="flex space-x-12">
                <Link
                  href="/"
                  className="text-darkBlue hover:text-lightBlue px-4 py-6 rounded-md text-sm font-medium"
                >
                  HOME
                </Link>
              </div>
              <div className="flex space-x-12">
                <Link
                  href="/about"
                  className="text-darkBlue hover:text-lightBlue px-4 py-6 rounded-md text-sm font-medium"
                >
                  ABOUT US
                </Link>
              </div>
              <div className="flex space-x-12">
                <Link
                  href="/departments"
                  className="text-darkBlue hover:text-lightBlue px-4 py-6 rounded-md text-sm font-medium"
                >
                  DEPARTMENTS
                </Link>
              </div>
              <div className="bg-finRed bg-opacity-60 border-t-4 border-finRed p-4 py-6 sm:static">
                <div className="flex space-x-12">
                  <Link
                    href="/contact"
                    className="text-darkBlue hover:text-lightBlue px-4 rounded-md text-sm font-medium"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
              <div className="flex space-x-12 px-4 py-6">
                <Link href="/">
                  <RiSearchLine className="search-icon " />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#homepage"
                className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Link>
              <Link
                href="#about"
                className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
              >
                ABOUT
              </Link>
              <Link
                href="#departments"
                className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
              >
                DEPARTMENTS
              </Link>
              <Link
                href="#contact"
                className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
              >
                CONTACT US
              </Link>
            </div>
          </div> 
        )}
      </nav>
    </>
  );
};
