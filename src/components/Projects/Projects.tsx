import { FC } from "react";
import ProjectsBox from "./ProjectsBox/ProjectsBox";
import logo from "@/assets/Image/logo.ico";
import Link from "next/link";
import ProjectSection from "./ProjectSection/ProjectSection";
import Iranlearn from "/public/Image/Screenshot 2024-08-18 161603.png";
import SampleWorkSection from "../SampleWorkSection/SampleWorkSection";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const Projects: FC = () => {
  return (
    <div
      className="w-full text-center mt-20 bg-gray-100 p-10 mb-20 lg:px-10"
      id="projects"
    >
      <h1 className="max-sm:text-center text-4xl font-mono sm:mb-10">
        نمونه کار های من
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <SampleWorkSection
          imageSrc={Iranlearn.src}
          title="سایت ایران لرن"
          text="فروش دوره های برنامه نویسی وب"
        >
          <FaReact />
          <RiTailwindCssFill />
          <FaBootstrap />
          <TbBrandVite />
        </SampleWorkSection>
        <SampleWorkSection
          imageSrc={Iranlearn.src}
          title="سایت ایران لرن"
          text="فروش دوره های برنامه نویسی وب"
        >
          <FaReact />
          <RiTailwindCssFill />
          <FaBootstrap />
          <TbBrandVite />
        </SampleWorkSection>
        <SampleWorkSection
          imageSrc={Iranlearn.src}
          title="سایت ایران لرن"
          text="فروش دوره های برنامه نویسی وب"
        >
          <FaReact />
          <RiTailwindCssFill />
          <FaBootstrap />
          <TbBrandVite />
        </SampleWorkSection>
      </div>
      {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProjectsBox
          title="وبسایت فروش دوره آموزشی"
          desc="توسعه کامل فرانت اند و اتصال api به سایت"
          img={logo.src}
        />
        <ProjectsBox
          title="تکنولوژی های سمت فرانت"
          desc="استفاده از ریکت و تیلویند و پیاده سازی فرایند احراز هویت کاربر"
        />
        <ProjectsBox
          title="تکنولوژی های سمت بک اند"
          desc="استفاده از Nodejs و برای دیتا بیس استفاده از MongoDB"
        />
        <ProjectsBox
          title="ریسپانسیو"
          desc="ریسپانسیو بودن تمامی صفحات پروژه برای تمامی اندازه ها"
        />
      </div> */}
      <div className="my-10 sm:flex justify-evenly">
        <Link
          href={"/projects"}
          className="bg-blue-950 text-white p-6 px-10  rounded-full col-span-5 lg:col-span-3 text-center hover:bg-blue-600 hover:text-white block max-sm:my-5"
        >
          مشاهده نمونه کار ها
        </Link>
        <Link
          href={"https://github.com/thealih/resume-website"}
          className="bg-blue-950 text-white p-6 px-10  rounded-full col-span-5 lg:col-span-3 text-center hover:bg-blue-600 hover:text-white block max-sm:my-5"
          target="_blank"
        >
          مشاهده source code
        </Link>
      </div>
    </div>
  );
};

export default Projects;
