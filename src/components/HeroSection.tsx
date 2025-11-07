"use client";

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
        Building scalable APIs, full-stack apps, and terminal tools with Go,
        Python, and React.
      </h3>
    </section>
  );
};

export default HeroSection;
