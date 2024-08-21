import { FC } from "react";
import Link from "next/link";
import Iranlearn from "/public/Image/Screenshot 2024-08-18 161603.png";
import resumeWebsite from "/public/Image/Screenshot 2024-08-20 235807.png";
import SampleWorkSection from "../SampleWorkSection/SampleWorkSection";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const Projects: FC = () => {
  return (
    <div
      className="w-full text-center mt-20 bg-gray-100 p-10 mb-20 lg:px-10"
      id="projects"
    >
      <h1 className="max-sm:text-center text-4xl font-mono sm:mb-10 mt-5">
        نمونه کار های من
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <SampleWorkSection
          imageSrc={Iranlearn.src}
          title="سایت ایران لرن"
          text="فروش دوره های برنامه نویسی وب"
          href="/projects/iranlearn"
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
          href="#"
        >
          <FaReact />
          <RiTailwindCssFill />
          <FaBootstrap />
          <TbBrandVite />
        </SampleWorkSection>
        <SampleWorkSection
          imageSrc={resumeWebsite.src}
          title="سایت رزومه"
          text="معرفی و رزومه کاری خودم"
          href="#"
        >
          <SiNextdotjs />
          <BiLogoTypescript />
          <FaReact />
          <RiTailwindCssFill />
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
      <div className="my-10 text-center flex justify-center">
        <Link
          href={"/projects"}
          className="bg-blue-950 text-white p-6 px-10  rounded-3xl col-span-5 lg:col-span-3 text-center hover:text-white block max-sm:my-5 w-96 "
        >
          مشاهده همه نمونه کار ها
        </Link>
      </div>
    </div>
  );
};

export default Projects;
