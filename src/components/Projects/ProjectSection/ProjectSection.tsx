import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSrc: string;
  title: string;
  text: string;
  desc: string;
  href: string;
}

const ProjectSection = ({ imageSrc, title, text, desc, href }: Props) => {
  return (
    <div className="md:flex justify-between flex-row-reverse border-gray-300 hover:shadow-2xl border-2 border-solid rounded-2xl mt-10 bg-gray-100 p-10 duration-300">
      <div className="md:w-5/12 ">
        <Link href={"#"}>
          <Image src={imageSrc} alt="website image" width={1896} height={867} />
        </Link>
      </div>
      <div className="md:w-1/3 max-md:mt-5 max-md:px-5 relative">
        <ul>
          <li className="lg:mb-10">
            <h5 className="text-gray-600 text-2xl leading-normal font-mono">
              اسم وبسایت
            </h5>
            <p className="text-lg font-mono leading-normal mt-2">{title}</p>
          </li>
          <li className="my-7 lg:my-10">
            <h5 className="text-gray-600 text-2xl leading-normal font-mono">
              خلاصه وب سایت
            </h5>
            <p className="text-lg font-mono leading-normal mt-2">{text}</p>
          </li>
          <li className="my-7 lg:my-10">
            <h5 className="text-gray-600 text-2xl leading-normal font-mono">
              نحوه مشاهده
            </h5>
            <p className="text-lg font-mono leading-normal mt-2">{desc}</p>
          </li>
        </ul>
        <Link
          href={href}
          className="bg-blue-950 text-white p-5 bottom-0 rounded-xl text-lg font-mono leading-normal mt-2 xl:absolute lg:bottom-0 hover:text-white"
        >
          توضیحات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
