import { FC } from "react";
import ServicesBox from "./ServisesBox/ServisesBox";

const Services: FC = () => {
  return (
    <div className="w-full mt-20">
      <h1 className="text-center text-4xl font-mono">
        در چه مواردی میتونم کمک کننده شما باشم
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10 md:gap-x-20 lg:grid-cols-6">
        <ServicesBox
            title="Web Api"
            icon="web"
        />
        <ServicesBox
            title="Asp.NetCore"
            icon="asp"
        />
        <ServicesBox
            title="SQL Server"
            icon="sql"
        />
        <ServicesBox
            title="MongoDB"
            icon="mongo"
        />
        <ServicesBox
            title="Docker"
            icon="docker"
        />
        <ServicesBox
          title="Blazor"
          icon="blazor"
        />
        <ServicesBox
          title="Next JS"
          icon="next"
        />
        <ServicesBox
          title="React JS"
          icon="react"
        />
        <ServicesBox
          title="TypeScript"
          icon="typescript"
        />
        <ServicesBox
          title="JavaScript"
          icon="javascript"
        />
        <ServicesBox
          title="Tailwind"
          icon="tailwind"
        />
        <ServicesBox
          title="Bootstrap"
          icon="bootstrap"
        />
      </div>
    </div>
  );
};

export default Services;
