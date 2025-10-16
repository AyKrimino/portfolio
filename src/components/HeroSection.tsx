"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-col items-center justify-center gap-4 lg:gap-6 min-h-screen px-4 sm:px-6 lg:px-8 text-center"
    >
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
        Ayoub Krimi
      </h1>
      <h3 className="max-w-2xl font-medium text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
        Building scalable APIs, full-stack apps, and terminal tools with Go,
        Python, and React.
      </h3>
      <button
        onClick={() => scrollToSection("about-section")}
        className="mt-4"
        type="button"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 hover:text-gray-900 cursor-pointer hover:scale-150 transition-all duration-300 delay-75" />
      </button>
    </section>
  );
};

export default HeroSection;
