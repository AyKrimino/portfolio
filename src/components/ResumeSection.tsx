"use client";

import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import { Download, ExternalLink } from "lucide-react";

const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

const ResumeSection = () => {
  return (
    <section
      id="resume-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        Resume
      </h2>

      <PDFViewer />

      <div className="flex flex-col sm:flex-row items-center justify-center mt-6">
        <a href="resume.pdf" download="Ayoub_Krimi_Resume.pdf">
          <Button className="w-full sm:w-auto">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
