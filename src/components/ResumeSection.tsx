"use client";

import { Button } from "./ui/button";

const ResumeSection = () => {
  return (
    <section
      id="resume-section"
      className="min-h-screen flex flex-col items-center justify-center gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>

      <a href="resume.pdf" download="Ayoub_Krimi_Resume.pdf">
        <Button className="px-6 py-2 text-sm md:text-base bg-gradient-to-r from-gray-900/80 to-gray-900/100 hover:cursor-pointer hover:ring-2 hover:ring-gray-900 hover:scale-105 transition-all duration-200 ease-out shadow-sm hover:shadow-md rounded-lg">
          Download Resume
        </Button>
      </a>
    </section>
  );
};

export default ResumeSection;
