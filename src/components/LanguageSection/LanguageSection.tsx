import { FC } from "react";
import Skillbar from "../Skillsbar/Skillsbar";

const LanguageSection: FC = () => {
  return (
    <div className="px-10 mb-20 mt-10 lg:mx-10">
      <h1 className="text-center text-4xl font-mono leading-snug ">زبان ها</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
        <Skillbar progress={70} title="انگلیسی" />
        <Skillbar progress={60} title="ترکی" />
        <Skillbar progress={30} title="عربی" />
      </div>
    </div>
  );
};

export default LanguageSection;
