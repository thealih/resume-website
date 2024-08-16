import { FC } from "react";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/Logo/BlueLogo.png";
import { FaArrowCircleUp } from "react-icons/fa";

const Navbar: FC = () => {
  return (
    <div className="p-5" id="pc-nav">
      <div className="flex justify-between items-center">
        <div className="mr-5 flex items-center w-28 h-10">
          <Image src={Logo.src} alt="" width={950} height={590} />
        </div>
        <div>
          <ul className="hidden lg:flex  ">
            <li className="mx-5">
              <Link href={"/"}>خانه</Link>
            </li>
            <li className="mx-5">
              <Link href="#about-me">درباره من</Link>
            </li>
            <li className="mx-5">
              <Link href={"#projects"}>پروژه ها</Link>
            </li>
          </ul>
        </div>
        {/* <BiSearch className="font-bold text-4xl rounded-full border-black" /> */}
        <Link
          href={"/"}
          className="bg-blue-950 text-white p-4 px-10  rounded-md col-span-5 lg:col-span-3 text-center hover:text-gray-100"
        >
          دانلود رزومه
        </Link>
      </div>
      <div className="fixed hidden lg:block bottom-0 left-0 m-10 z-50">
        <Link href={"#pc-nav"} className=" text-center hover:text-gray-100">
          <FaArrowCircleUp className="bg-gray-100 rounded-full text-blue-950 text-7xl" />
        </Link>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
