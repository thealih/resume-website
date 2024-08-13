"use client";
import Link from "next/link";
import { FC, useContext } from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar: FC = (allMenus: any) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200  z-50">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <div className="flex justify-center align-middle">
          <Link
            href={`/`}
            className={`w-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group `}
          >
            <FaHome
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              خانه
            </span>
          </Link>
        </div>

        <div className="flex justify-center align-middle">
          <Link
            href={`/site-categories`}
            className="w-full inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <RxHamburgerMenu
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow"
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-xs text-center text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
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
              className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-yellow "
              fill="currentColor"
              aria-hidden="true"
            />

            <span className="text-xs text-center text-gray-500 dark:text-gray-400 group-hover:text-yellow font-mono">
              پروژه ها
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
