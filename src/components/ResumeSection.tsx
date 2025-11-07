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
        <Button variant="outline" className="">
          Download Resume
        </Button>
      </a>
    </section>
  );
};

export default ResumeSection;
