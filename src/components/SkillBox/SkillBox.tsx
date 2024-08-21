"use client";
interface Props {
  title: string;
  count: number;
}

import Image from "next/image";
import star from "/public/svgs/star.svg";
import starFill from "/public/svgs/star_fill.svg";
import { useEffect, useRef } from "react";

const SkillBox = ({ title, count }: Props) => {
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
          // progress.classList.remove("square-animation");
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
  const starItems = [];
  const starFillItems = [];
  for (let index = 0; index < count; index++) {
    starFillItems.push(
      <Image
        key={1}
        width={20}
        height={20}
        src={starFill.src}
        alt="rating"
        className="course-box__star"
      />
    );
  }
  for (let index = 0; index < 5 - count; index++) {
    starItems.push(
      <Image
        key={2}
        width={20}
        height={20}
        src={star.src}
        alt="rating"
        className="course-box__star"
      />
    );
  }
  return (
    <div ref={contentRef}>
      <div className=" bg-gray-100  rounded-2xl flex justify-between py-5 px-3 content-bar opacity-0">
        <h1 className="text-2xl">{title}</h1>
        <div className="course-box__rating flex">
          {starItems}
          {starFillItems}
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
