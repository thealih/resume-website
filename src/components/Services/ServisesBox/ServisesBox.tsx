"use client";

import { useEffect, useRef } from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

interface Props {
  icon: string;
  title: string;
  text: string;
}

const ServicesBox = ({ icon, title, text }: Props) => {
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
    <div ref={contentRef}>
      <div className="bg-gray-100 p-5 rounded-2xl content-bar h-full opacity-0">
        <div>{iconSelect()}</div>
        <div className="mt-12">
          <h1 className="text-3xl font-mono">{title}</h1>
          <p className="text-justify text-base mt-1 ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
