"use client";

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

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent dark:from-primary/15" />
      </div>

      <h1 className="font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
        Ayoub Krimi
      </h1>
      <h3 className="max-w-2xl font-medium text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
        Software Developer | Specializing in Distributed Systems & Microservices | <strong>Go</strong>, <strong>React/Next.js</strong> | Building Scalable, High-Concurrency Solutions
      </h3>

      <div className="relative w-full mt-10 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="flex gap-3 sm:gap-4 md:gap-6 animate-marquee" style={{ width: "max-content" }}>
          {[...GOPHERS, ...GOPHERS].map((gopher, index) => (
            <div
              key={`${gopher.path}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-2 rounded-lg"
            >
              <img
                src={gopher.path}
                alt={gopher.alt}
                loading="lazy"
                className="aspect-square object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/60 dark:bg-white/10 shadow-md p-2 rounded-full drop-shadow-md transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
