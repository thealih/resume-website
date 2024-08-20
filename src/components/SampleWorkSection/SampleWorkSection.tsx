import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface Props {
  imageSrc: string;
  title: string;
  text: string;
  children: any;
}

const SampleWorkSection = ({ imageSrc, title, text, children }: Props) => {
  return (
    <div className=" border-gray-300 hover:shadow-2xl border-2 border-solid rounded-2xl mt-10 bg-gray-100 p-10 duration-300">
      <div className="">
        <Link href={"#"}>
          <Image
            src={imageSrc}
            alt="website image"
            width={1896}
            height={867}
            className="border-gray-400 border-solid border-2 rounded-lg"
          />
        </Link>
      </div>
      <div className="max-md:mt-5 max-md:px-5 text-right mt-5 ">
        <ul className="mb-16">
          <li className="lg:mb-10">
            <h5 className="text-gray-600 text-2xl leading-normal font-mono">
              اسم وبسایت
            </h5>
            <p className="text-lg font-mono leading-normal mt-2">{title}</p>
          </li>
          <li className="my-7 lg:my-10">
            <h5 className="text-gray-600 text-2xl leading-normal font-mono">
              معرفی وب سایت
            </h5>
            <p className="text-lg font-mono leading-normal mt-2">{text}</p>
          </li>
          <li className="my-7 lg:my-10">
            <h5 className="text-gray-600 text-2xl leading-normal font-mono">
              تکنولوژی های مورد استفاده
            </h5>
            <div className="flex items-center gap-x-3 text-5xl mt-2">
              {children}
            </div>
          </li>
        </ul>
        <Link
          href={"#"}
          className="bg-blue-950 text-white p-5 bottom-0 rounded-xl text-lg font-mono leading-normal mt-20 lg:bottom-0 hover:text-white"
        >
          توضیحات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default SampleWorkSection;
