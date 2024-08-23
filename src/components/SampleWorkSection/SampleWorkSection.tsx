"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
interface Props {
  imageSrc: string;
  title: string;
  text: string;
  href: string;
  children: any;
}

const SampleWorkSection = ({
  imageSrc,
  title,
  text,
  href,
  children,
}: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Ensure the ref is not null and code only runs on the client
    if (!contentRef.current) return;

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Find the ".content-bar" element inside the observed element
        const progress = entry.target.querySelector(
          ".content-bar"
        ) as HTMLElement | null;

        if (!progress) return; // Skip if the element is not found

        if (entry.isIntersecting) {
          progress.classList.add("square-animation");
        } else {
          progress.classList.remove("square-animation");
        }
      });
    });

    // Start observing the element
    observer.observe(contentRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  function onImageLoad() {
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
  return (
    <div className=" " ref={contentRef}>
      <div className="border-gray-300 hover:shadow-2xl border-2 border-solid rounded-2xl mt-10 bg-gray-100 p-10 duration-300 content-bar">
        <div className="">
          <Link href={"#"}>
            <Image
              src={imageSrc}
              alt="website image"
              width={1896}
              height={867}
              className="border-gray-400 border-solid border-2 rounded-lg"
              onLoad={onImageLoad}
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
            href={href}
            className="bg-blue-950 text-white p-5 bottom-0 rounded-xl text-lg font-mono leading-normal mt-20 lg:bottom-0 hover:text-white"
          >
            توضیحات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SampleWorkSection;
