import AboutMe from "@/components/AboutMe/AboutMe";
import Landing from "@/components/Landing/Landing";
import LanguageSection from "@/components/LanguageSection/LanguageSection";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main className="font-sans bg-white 2xl:container">
      <Landing />
      <div className="p-10 mb-20 mt-10 lg:mx-10" id="about-me">
        <AboutMe />
        <Services />
      </div>
      <Projects />
      <SkillsSection />
      <LanguageSection />
    </main>
  );
}
