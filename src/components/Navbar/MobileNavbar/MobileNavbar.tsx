"use client";
import Link from "next/link";
import { FC, useContext } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar: FC = (allMenus: any) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full  bg-white border-t border-gray-200  z-50 pb-6 px-2 pt-3">
      <div className="grid h-full sm:max-w-lg grid-cols-3 mx-auto">
        <div className="flex justify-center align-middle ">
          <Link
            href={`/`}
            className={`w-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group `}
          >
            <FaHome
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow "
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono ">
              خانه
            </span>
          </Link>
        </div>

        <div className="flex justify-center align-middle">
          <Link
            id="about-me"
            href={"about-me"}
            className="w-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <RxHamburgerMenu
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-center text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              درباره من
            </span>
          </Link>
        </div>

        <div className="flex justify-center align-middle">
          <Link
            href={`#`}
            className="w-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <FaShoppingCart
              className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow "
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-base text-center text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              پروژه ها
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
