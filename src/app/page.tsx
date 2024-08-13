import AboutMe from "@/components/AboutMe/AboutMe";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Landing />
      <div className="px-10 mb-20 mt-10 lg:mx-10">
        <AboutMe />
        <Services />
      </div>
      <Projects />
    </main>
  );
}
