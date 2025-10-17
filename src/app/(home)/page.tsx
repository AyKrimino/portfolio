import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen py-6 overflow-y-auto">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
