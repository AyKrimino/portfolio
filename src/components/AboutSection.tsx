"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { ChevronDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <p className="text-lg text-muted-foreground leading-relaxed text-center mb-10 pt-12">
        Final-year Computer Science student at ISI Ariana with hands-on
        experience building full-stack applications in Django/React and CLI
        tools in Go. As Head of the High-Level Programming Department at
        Freeways Club, I’ve led technical workshops for 100+ students on Git,
        Linux, and web fundamentals. Passionate about scalable systems,
        open-source software, and writing clean, tested code—currently solving
        115+ LeetCode problems to sharpen my problem-solving skills.
      </p>
      <div className="text-left">
        <h2 className="text-2xl font-semibold mb-4">
          Head of High-Level Programming at Freeways Club
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Led workshops for 50+ students on HTML/CSS, Git, and
            GitHub—improving collaboration and version control skills across the
            institute.
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Organized Linux installation sessions for 60+ students, promoting
            open-source adoption and system configuration literacy.
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Coordinated 3+ inter-departmental tech events with 200+ attendees,
            managing content and logistics.
          </li>
        </ul>
      </div>
      <button
        onClick={() => scrollToSection("projects-section")}
        className="mt-12 w-full flex justify-center"
        type="button"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 hover:text-gray-900 cursor-pointer hover:scale-150 transition-all duration-300 delay-75" />
      </button>
    </section>
  );
};

export default AboutSection;
