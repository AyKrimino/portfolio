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
      className="min-h-screen flex flex-col items-center justify-center gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 text-center"
    >
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
        Ayoub Krimi
      </h1>
      <h3 className="max-w-2xl font-medium text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
        Final Year CS Student seeking <strong>Backend Internship</strong> |
        Distributed Systems Enthusiast |
        Building Tools and Systems in <strong>Go</strong> |
        <strong>React/Next.js</strong> | <strong>Python/Django</strong>
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-4 px-14 md:px-8">
        {GOPHERS.map((gopher) => (
          <div
            key={gopher.path}
            className="group flex items-center justify-center p-2 rounded-lg"
            aria-hidden={false}
          >
            <a
              href={gopher.path}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-full"
              aria-label={gopher.alt}
            >
              <img
                src={gopher.path}
                alt={gopher.alt}
                loading="lazy"
                className="aspect-square object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/60 shadow-md p-2 rounded-full drop-shadow-md transition-transform duration-200 ease-out transform group-hover:-translate-y-1 group-hover:scale-105 group-focus-visible:-translate-y-1 group-focus-visible:scale-105"
              />
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HeroSection;
