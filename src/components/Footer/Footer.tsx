import Link from "next/link";
import { FC } from "react";
import { FaFacebookF } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <>
      <div className="bg-blue-950 text-white   max-md:mb-16">
        <div className="bg-blue-950 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-80 max-md:mb-16">
          <div>
            <h3>راه های ارتباطی</h3>
            <ul>
              <li>
                <Link href={"/"}>لینکدین</Link>
              </li>
              <li>
                <Link href={"/"}>تلگرام</Link>
              </li>
              <li>
                <Link href={"/"}>شماره تماس</Link>
              </li>
              <li>
                <Link href={"/"}></Link>
              </li>
            </ul>
          </div>
          <div>خیلی هم خوب</div>
          <div>عالی</div>
        </div>
      </div>
      <div className=" bg-gray-200  flex justify-center items-center">
        <h1 className="max-sm:text-center text-3xl font-mono leading-snug my-10">
          سایت توسعه یافته با NextJS
        </h1>
      </div>
    </>
  );
};

export default Footer;
