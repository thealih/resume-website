"use client";
import Link from "next/link";
import { FC, useContext } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiAboutdotme } from "react-icons/si";

const MobileNavbar: FC = (allMenus: any) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full  bg-white border-t border-gray-200  z-50 pb-6 px-2 pt-3">
      <div className="grid h-full sm:max-w-lg grid-cols-3 mx-auto">
        <div className="flex justify-center align-middle">
          <Link
            href={`/`}
            className={`w-full inline-flex flex-col items-center justify-center`}
          >
            <FaHome
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-gray-500 dark:text-gray-400 font-mono ">
              خانه
            </span>
          </Link>
        </div>

        <div className="flex justify-center align-middle duration-300 ease-linear">
          <Link
            href={"#about-me"}
            className="w-full inline-flex flex-col items-center justify-center group"
          >
            <SiAboutdotme
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-center text-gray-500 dark:text-gray-400 font-mono">
              درباره من
            </span>
          </Link>
        </div>

        <div className="flex justify-center align-middle">
          <Link
            href={`#projects`}
            className="w-full inline-flex flex-col items-center justify-center group"
          >
            <GoProjectSymlink
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-center text-gray-500 dark:text-gray-400 font-mono">
              پروژه ها
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
