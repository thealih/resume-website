import { FC } from "react";
import SkillBar from "../SkillsBar/SkillsBar";

const LanguageSection: FC = () => {
  return (
    <div className="px-10 mb-20 mt-10 lg:mx-10">
      <h1 className="text-center text-4xl font-mono leading-snug ">زبان ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
        <SkillBar progress={70} title="انگلیسی" />
        <SkillBar progress={60} title="ترکی" />
        <SkillBar progress={30} title="عربی" />
      </div>
    </div>
  );
};

export default LanguageSection;
