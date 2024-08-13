import { FC } from "react";
import ProjectsBox from "./ProjectsBox/ProjectsBox";
import logo from "@/Image/logo.ico";

const Projects: FC = () => {
  return (
    <div className="w-full text-center mt-20 bg-gray-100 p-10 mb-20 lg:px-10">
      <h1 className="max-sm:text-center text-4xl font-mono sm:mb-10">
        نمونه کار های من
      </h1>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProjectsBox
          title="وبسایت فروش دوره آموزشی"
          desc="توسعه کامل فرانت اند و اتصال api به سایت"
          img={logo.src}
        />
        <ProjectsBox
          title="تکنولوژی های سمت فرانت"
          desc="استفاده از ریکت و تیلویند و پیاده سازی فرایند احراز هویت کاربر و تعامل با بکند برنامه با استفاده از هوک های ریکت"
        />
      </div>
    </div>
  );
};

export default Projects;
