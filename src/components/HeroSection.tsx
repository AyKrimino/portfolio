"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

const GOPHERS = [
  { path: "gamer.svg", alt: "gopher gamer" },
  { path: "gotham.svg", alt: "gotham gopher" },
  { path: "lifting-1TB.svg", alt: "lifting 1TB gopher" },
  { path: "power-to-the-linux.svg", alt: "power to the linux gopher" },
  { path: "standing.svg", alt: "standing gopher" },
  { path: "surfing-js.svg", alt: "surfing JavaScript gopher" },
  { path: "vim-go.svg", alt: "vim-go gopher" },
  { path: "witch-learning.svg", alt: "witch learning gopher" },
  { path: "with-C-book.svg", alt: "gopher with C book" },
  { path: "zorro.svg", alt: "zorro gopher" },
];

const TECH_LOGOS = [
  { path: "golang-logo.svg", alt: "Go" },
  { path: "typescript-logo.svg", alt: "TypeScript" },
  { path: "reactjs-logo.svg", alt: "React" },
  { path: "nextjs-logo.svg", alt: "Next.js" },
  { path: "docker-logo.svg", alt: "Docker" },
  { path: "postgres-logo.svg", alt: "PostgreSQL" },
  { path: "redis-logo.svg", alt: "Redis" },
  { path: "python-logo.svg", alt: "Python" },
  { path: "linux-logo.svg", alt: "Linux" },
  { path: "github-logo.svg", alt: "GitHub" },
  { path: "git-logo.svg", alt: "Git" },
  { path: "neovim-logo.svg", alt: "Neovim" },
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >


      <div
        className={`flex flex-col items-center gap-5 sm:gap-6 transition-all duration-1000 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-medium rounded-full border border-border bg-muted/50 text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for opportunities
        </span>

        <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-none">
          Ayoub Krimi
        </h1>

        <p className="max-w-xl sm:max-w-2xl font-medium text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Software Developer building high-concurrency distributed systems with{" "}
          <span className="text-foreground font-semibold">Go</span>,{" "}
          <span className="text-foreground font-semibold">React</span>, and{" "}
          <span className="text-foreground font-semibold">Next.js</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
          <a
            href="#projects-section"
            className="group inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-foreground text-background text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/20 active:scale-95 cursor-pointer"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact-section"
            className="group inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-border bg-background text-foreground text-sm sm:text-base font-medium transition-all duration-300 hover:bg-muted hover:border-foreground/30 active:scale-95 cursor-pointer"
          >
            <Sparkles className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
            Contact Me
          </a>
        </div>
      </div>

      <div
        className={`relative w-full mt-6 sm:mt-8 md:mt-10 transition-all duration-1000 delay-300 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex gap-2 sm:gap-3 md:gap-4 animate-marquee" style={{ width: "max-content" }}>
          {[...GOPHERS, ...GOPHERS].map((gopher, index) => (
            <div
              key={`${gopher.path}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-1.5 sm:p-2 rounded-lg"
            >
              <img
                src={gopher.path}
                alt={gopher.alt}
                loading="lazy"
                className="aspect-square object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 bg-white/60 dark:bg-white/10 shadow-sm sm:shadow-md p-1.5 sm:p-2 rounded-full drop-shadow-md transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`relative w-full max-w-3xl mx-auto transition-all duration-1000 delay-500 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex gap-2 sm:gap-3 md:gap-4 animate-marquee-reverse" style={{ width: "max-content" }}>
          {[...TECH_LOGOS, ...TECH_LOGOS].map((logo, index) => (
            <div
              key={`${logo.path}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-1.5 sm:p-2 rounded-lg"
            >
              <img
                src={logo.path}
                alt={logo.alt}
                loading="lazy"
                className="aspect-square object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-300 ease-out hover:scale-110 hover:opacity-100 dark:hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[10px] sm:text-xs font-medium text-muted-foreground/60 tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground/40" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation: none;
          }
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
