// "use client";
// import Image from "next/image";
// import { AiOutlineMenu } from "react-icons/ai";
// import { RxCross1 } from "react-icons/rx";
// import React, { useState } from "react";
// import Link from "next/link";
// import Dropdown from "./Dropdown";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav>
//         <div className="max-w-10xl mx-0 sm:px-0">
//           <div className="relative flex items-center justify-left h-15">
//             <div className="relative inset-y-0 right-0 flex items-center sm:hidden">
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-finRed hover:text-darkBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isOpen}
//                 onClick={toggleMenu}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M4 6h16M4 12h16M4 18h16"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="flex justify-left">
//               <div className="flex-shrink-0">
//                 <Link href="/">
//                   <Image
//                     src="/images/Logo .png"
//                     alt="logo"
//                     width={180}
//                     height={180}
//                   />
//                 </Link>
//               </div>
//             </div>
//             <div className="border-b border-white flex-1 sm:items-stretch sm:justify-end  sm:flex relative">
//               <div className="flex space-x-12">
//                 <Link
//                   href="/"
//                   className="text-darkBlue hover:text-lightBlue px-4 py-6 rounded-md text-sm font-medium"
//                 >
//                   HOME
//                 </Link>
//               </div>
//               <div className="flex space-x-12">
//                 <Link
//                   href="/about"
//                   className="text-darkBlue hover:text-lightBlue px-4 py-6 rounded-md text-sm font-medium"
//                 >
//                   ABOUT US
//                 </Link>
//               </div>
//               <div className="flex space-x-12">
//                 <Link
//                   href="/departments"
//                   className="text-darkBlue hover:text-lightBlue px-4 py-6 rounded-md text-sm font-medium"
//                 >
//                   DEPARTMENTS
//                 </Link>
//               </div>
//               <div className="bg-finRed bg-opacity-60 border-t-4 border-finRed p-4 py-6 sm:static">
//                 <div className="flex space-x-12">
//                   <Link
//                     href="/contact"
//                     className="text-darkBlue hover:text-lightBlue px-4 rounded-md text-sm font-medium"
//                   >
//                     CONTACT US
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex space-x-12 px-4 py-6">
//                 <Link href="/">
//                   <Image
//                     src="/images/srch.png"
//                     alt="search"
//                     width={30}
//                     height={30}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="sm:hidden" id="mobile-menu">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link
//                 href="/"
//                 className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 HOME
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 ABOUT
//               </Link>
//               <Link
//                 href="/departments"
//                 className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 DEPARTMENTS
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-darkBlue hover:text-lightBlue block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 CONTACT US
//               </Link>
//             </div>
//           </div> 
//         )}
//       </nav>
//     </>
//   );
// };
