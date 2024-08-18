import { FC } from "react";
import Skillbar from "../Skillsbar/Skillsbar";
import SkillBox from "../SkillBox/SkillBox";

const SkillsSection: FC = () => {
  return (
    <div className="md:flex md:justify-between mx-10 ">
      <div className="md:w-1/2 md:px-10">
        <h1 className="text-center text-4xl font-mono sm:mb-10">
          مهارت های برنامه نویسی
        </h1>
        <div className="lg:grid grid-cols-2 gap-x-10">
          <Skillbar title="Next JS" progress={70} />
          <Skillbar title="React JS" progress={90} />
          <Skillbar title="Type script" progress={70} />
          <Skillbar title="Java script" progress={95} />
          <Skillbar title="Tailwind" progress={80} />
          <Skillbar title="Bootstrap" progress={70} />
          <Skillbar title="Java script" progress={85} />
          <Skillbar title="GIT" progress={80} />
          <Skillbar title="Html" progress={100} />
          <Skillbar title="Css" progress={100} />
        </div>
      </div>
      <div className="md:w-1/2 md:px-10 max-md:my-10 ">
        <h1 className="text-center text-4xl font-mono sm:mb-10">
          مهارت های شخصیتی
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-md:mt-10 lg:mt-20">
          <SkillBox title="قدرت مذاکره" count={4} />
          <SkillBox title="برنامه ریزی" count={5} />
          <SkillBox title="انتقادپذیری" count={4} />
          <SkillBox title="همدلی" count={4} />
          <SkillBox title="مدیریت جلسات" count={4} />
          <SkillBox title="خودآگاهی" count={4} />
          <SkillBox title="شنونده خوب" count={5} />
          <SkillBox title="مدیریت زمان" count={4} />
          <SkillBox title="تفکر نقادانه" count={3} />
          <SkillBox title="کار تیمی" count={3} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
