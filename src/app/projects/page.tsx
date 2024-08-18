import ProjectSection from "@/components/Projects/ProjectSection/ProjectSection";
import { Metadata } from "next";
import Iranlearn from "/public/Image/Screenshot 2024-08-18 161603.png";

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "This site is my resume",
};

const projects = () => {
  return (
    <div className="p-10 lg:mx-10 mb-10">
      <h1 className="text-center text-4xl font-mono leading-snug bg-blue-950 text-white py-8 rounded-3xl">
        نمونه کار های من
      </h1>
      <ProjectSection
        imageSrc={Iranlearn.src}
        title="سایت ایران لرن"
        text="فروش دوره های برنامه نویسی وب"
        desc="برای دیدن بخش های کامل نمونه سایت دانلود کد ها و نحوه استفاده و
              مشاهده Local درون مرورگر خود از وبسایت به توضیحات یشتر مراجعه
              کنید."
      />
      <ProjectSection
        imageSrc={Iranlearn.src}
        title="سایت ایران لرن"
        text="فروش دوره های برنامه نویسی وب"
        desc="برای دیدن بخش های کامل نمونه سایت دانلود کد ها و نحوه استفاده و
              مشاهده Local درون مرورگر خود از وبسایت به توضیحات یشتر مراجعه
              کنید."
      />
      <ProjectSection
        imageSrc={Iranlearn.src}
        title="سایت ایران لرن"
        text="فروش دوره های برنامه نویسی وب"
        desc="برای دیدن بخش های کامل نمونه سایت دانلود کد ها و نحوه استفاده و
              مشاهده Local درون مرورگر خود از وبسایت به توضیحات یشتر مراجعه
              کنید."
      />
    </div>
  );
};

export default projects;
