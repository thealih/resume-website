import { FC } from "react";
import Skillbar from "../Skillsbar/Skillsbar";
import SkillBox from "../SkillBox/SkillBox";

const SkillsSection: FC = () => {
  return (
    <div className="md:flex md:justify-between mx-10 ">
      <div className="md:w-1/2 px-10">
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
        </div>
      </div>
      <div className="w-1/2 px-10">
        <h1 className="text-center text-4xl font-mono sm:mb-10">
          مهارت های برنامه نویسی
        </h1>
        <div className="grid grid-cols-2 gap-10 ">
          <SkillBox title="خونسردی" text="سعی در بر طرف مشکلات با صحبت کردن" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
