import Link from "next/link";
import { FC } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <>
      <div className="bg-blue-950 text-white   ">
        <div className="bg-blue-950 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 pb-40">
          <div>
            <h3 className="text-5xl font-mono text-center my-10">
              اطلاعات تماس
            </h3>
            <ul className="m-10 mt-20 leading-loose">
              <li>
                <Link href={"/"} className="text-gray-300 hover:text-white">
                  شماره تماس : 09912507897
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300 hover:text-white">
                  ایمیل : a.hashemi6336@gmail.com
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-300 hover:text-white">
                  تلگرام: TheAliH@
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-5xl font-mono text-center mt-10">
              شبکه های اجتماعی
            </h3>
            <ul className="m-10 mt-20 grid grid-cols-4 lg:grid-cols-2 justify-center mx-20 lg:mx-40 gap-y-20">
              <li className="flex justify-center">
                <Link
                  href={"/"}
                  className="text-gray-300 text-center hover:text-white"
                >
                  <FaInstagram className="text-6xl" />
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href={"https://www.linkedin.com/in/ali-hashemi-6910aa20a/"}
                  className="text-gray-300 text-center hover:text-white"
                >
                  <FaLinkedin className="text-6xl" />
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href={"https://github.com/thealih"}
                  className="text-gray-300 text-center hover:text-white"
                >
                  <FaGithub className="text-6xl" />
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href={"https://t.me/TheAli_H6"}
                  className="text-gray-300 text-center hover:text-white"
                >
                  <BiLogoTelegram className="text-6xl" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-5xl font-mono text-center mt-10">رزومه</h3>
            <ul className="m-10 mt-20 leading-loose grid grid-cols-2 ">
              <li className="flex justify-center">
                <Link
                  href={"/"}
                  className="bg-gray-400 text-black font-mono p-4 px-10  rounded-md col-span-5 lg:col-span-3 text-center hover:bg-gray-100 hover:text-black"
                >
                  دانلود رزومه
                </Link>
              </li>
              <li className="flex justify-center">
                <Link
                  href={"https://github.com/thealih/resume-website"}
                  className="bg-gray-400 text-black font-mono p-4 px-10  rounded-md col-span-5 lg:col-span-3 text-center hover:bg-gray-100 hover:text-black"
                >
                  کد وبسایت
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200  flex justify-center items-center max-lg:mb-24">
        <h1 className="text-center text-xl leading-snug my-10 ">
          © 2024 علی هاشمی. تمامی حقوق محفوظ است.
        </h1>
      </div>
    </>
  );
};

export default Footer;
