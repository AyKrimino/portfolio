"use client";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <p className="text-lg text-muted-foreground leading-relaxed text-center mb-10 pt-12">
        Final-year Computer Science student at ISI Ariana and Distributed Systems enthusiast.
        I build full-stack apps with Django/React and CLI tools in Go.
        As Head of the High-Level Programming Department at Freeways Club, I’ve led workshops on Git, Linux, and web fundamentals.
        Passionate about scalable systems, clean code, and open-source software.
      </p>
      <div className="text-left">
        <h2 className="text-2xl font-semibold mb-4">
          Head of High-Level Programming, Freeways Club
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Led workshops on HTML/CSS, Git, and GitHub for 50+ students.
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Organized Linux sessions promoting open-source adoption.
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Coordinated inter-departmental tech events for 200+ attendees.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
