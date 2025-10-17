"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const ResumeSection = () => {
  return (
    <section
      id="resume-section"
      className="flex flex-col items-center justify-center gap-4 lg:gap-6 min-h-screen px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>

      <a href="/resume.pdf" download="Ayoub_Krimi_Resume.pdf">
        <Button variant="outline" className="">
          Download Resume
        </Button>
      </a>

      <button
        onClick={() => scrollToSection("contact-section")}
        className="mt-4"
        type="button"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 hover:text-gray-900 cursor-pointer hover:scale-150 transition-all duration-300 delay-75" />
      </button>
    </section>
  );
};

export default ResumeSection;
