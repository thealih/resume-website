import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";

interface Props {
  icon: string;
  title: string;
  text: string;
}

const ServicesBox = ({ icon, title, text }: Props) => {
  function iconSelect() {
    switch (icon) {
      case "next":
        return <RiNextjsFill className="text-6xl" />;
        break;
      case "react":
        return <FaReact className="text-6xl" />;
        break;
      case "typescript":
        return <BiLogoTypescript className="text-6xl" />;
        break;
      case "tailwind":
        return <RiTailwindCssFill className="text-6xl" />;
        break;
      case "bootstrap":
        return <FaBootstrap className="text-6xl" />;
        break;
      default:
        return <BiLogoJavascript className="text-6xl" />;
    }
  }

  return (
    <div className=" bg-gray-100 p-5 rounded-2xl">
      <div>{iconSelect()}</div>
      <div className="mt-12">
        <h1 className="text-3xl font-mono">{title}</h1>
        <p className="text-justify text-base mt-1 ">{text}</p>
      </div>
    </div>
  );
};

export default ServicesBox;
