"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePhoto from "@/assets/Image/photo_2024-08-13_17-56-30.jpg";
import { FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Landing: FC = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Ensure the ref is not null and code only runs on the client
    if (!contentRef.current) return;

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Find the ".content-bar" element inside the observed element
        const progress = entry.target.querySelector(
          ".content-bar"
        ) as HTMLElement | null;

        if (!progress) return; // Skip if the element is not found

        if (entry.isIntersecting) {
          progress.classList.add("square-animation");
        } else {
          progress.classList.remove("square-animation");
        }
      });
    });

    // Start observing the element
    observer.observe(contentRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="lg:flex flex-row-reverse justify-between items-center py-16 bg-gray-100 px-7 sm:px-10">
      <div className="w-1/3 hidden lg:flex justify-center ml-20">
        <Image
          src={ProfilePhoto.src}
          width={400}
          height={200}
          alt="profile photo"
          className="rounded-full border-blue-800 border-4 border-solid"
        />
      </div>
      <div className="md:pr-10" ref={contentRef}>
        <p className="font-mono text-blue-500">سلام ، من علـــی هستــــم</p>
        <div className="lg:hidden flex  justify-center max-lg:mt-10 sm:ml-20 content-bar opacity-0">
          <Image
            src={ProfilePhoto.src}
            width={400}
            height={200}
            alt="profile photo"
            className="rounded-full border-blue-950 border-4 border-solid"
          />
        </div>
        <h1 className="text-6xl font-mono mt-20 leading-relaxed bg-yellow-200 inline-block">
          برنامه نویس فرانت اند
        </h1>
        <h2 className="text-5xl font-mono leading-relaxed">ساکن در تهران</h2>
        <div className="text-gray-500 text-lg mt-20 ">
          <p className="text-xl">راه های ارتباطی</p>
          <div className="grid grid-cols-12 my-10 gap-x-10 items-center ">
            <Link
              href={"tel:09912507897"}
              className="bg-blue-800 text-white p-6  rounded-full col-span-5 lg:col-span-3 text-center hover:text-gray-100"
            >
              تماس با من
            </Link>
            <Link href={"https://t.me/TheAli_H6"} target="_blank">
              <FaTelegram className="text-4xl ml-1 text-gray-500  hover:text-black ease-in-out duration-500" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ali-hashemi-"}
              target="_blank"
            >
              <FaLinkedin className="text-4xl mx-1 text-gray-500  hover:text-black ease-in-out duration-500" />
            </Link>
            <Link href={"https://github.com/thealih"} target="_blank">
              <FaGithub className="text-4xl mx-1 text-gray-500 hover:text-black ease-in-out duration-500" />
            </Link>
            <div className="text-4xl text-blue-800 col-span-4 mx-1 mr-5">
              ـــــــــ.
            </div>
          </div>
          <div className="flex ease-in-out duration-500 max-sm:flex-col">
            <Link
              href={"mailto:a.hashemi6336@gmail.com"}
              className="flex items-center justify-center text-2xl mx-10 hover:text-black ease-in-out duration-500"
            >
              a.hashemi6336@gmail.com
              <MdEmail className="text-3xl mx-1 text-gray-500 hover:text-black ase-in-out duration-500" />
            </Link>
            <Link
              href={"tel:09912507897"}
              className="flex items-center justify-center text-2xl mx-10 hover:text-black ease-in-out duration-500 max-sm:mt-5"
            >
              09912507897
              <IoCall className="text-3xl mx-1 text-gray-500 hover:text-black ase-in-out duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
