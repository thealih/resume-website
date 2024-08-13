import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Landing: FC = () => {
  return (
    <div className="sm:flex justify-between py-16 bg-gray-100 px-7 sm:px-10">
      <div className="sm:w-1/2">
        <p className="font-mono text-blue-500">سلام ، من علـــی هستــــم</p>
        <h1 className="text-6xl font-mono mt-20 leading-relaxed bg-yellow-200 inline-block">
          برنامه نویس فرانت اند
        </h1>
        <h2 className="text-5xl font-mono leading-relaxed">ساکن در تهران</h2>
        <div className="text-gray-500 text-lg mt-20">
          <p className="text-xl">راه های ارتباطی با بنده</p>
          <div className="grid grid-cols-12 my-10 gap-x-10 items-center">
            <button
              type="button"
              className="bg-blue-800 text-white p-6  rounded-full col-span-5"
            >
              تماس با من
            </button>
            <Link href={"/"}>
              <FaInstagram className="text-3xl ml-1 text-gray-500  hover:text-black ease-in-out duration-500" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ali-hashemi-6910aa20a/"}
              target="_blank"
            >
              <FaLinkedin className="text-3xl mx-1 text-gray-500  hover:text-black ease-in-out duration-500" />
            </Link>
            <Link href={"https://github.com/thealih"} target="_blank">
              <FaGithub className="text-3xl mx-1 text-gray-500 hover:text-black ease-in-out duration-500" />
            </Link>
            <div className="text-3xl text-blue-800 col-span-4 mx-1 mr-5">
              ـــــــــ.
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden "></div>
    </div>
  );
};

export default Landing;
