"use client";
import { useEffect, useRef } from "react";
import "./skills-bar.css";

interface Props {
  title: string;
  progress: number;
}

const Skillbar = ({ title, progress }: Props) => {
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
          progress.classList.add("progress-bar");
        } else {
          // progress.classList.remove("progress-bar");
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
  return (
    <div className="bg-gray-100 rounded-xl  p-5 sm:px-10 mt-10 ">
      <div className="flex justify-between text-lg">
        <span>{title}</span>
        <span>% {progress}</span>
      </div>
      <div
        className="bg-white rounded-xl h-4 flex items-center mt-2 mb-5 content"
        ref={contentRef}
      >
        <progress
          value={`${progress}`}
          max="100"
          className="w-full text-base rounded-xl content-bar"
        ></progress>
      </div>
    </div>
  );
};

export default Skillbar;
