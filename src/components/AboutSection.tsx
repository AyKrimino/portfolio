"use client";

import { User, Building2, Lightbulb, Rocket } from "lucide-react";

const ABOUT_PARAGRAPHS = [
  {
    icon: User,
    title: "Who I Am",
    content:
      "I am a Backend Developer and Computer Science graduate from ISI Ariana. I specialize in building distributed systems and microservices, with a focus on performance and scalability.",
  },
  {
    icon: Building2,
    title: "Experience",
    content:
      "During my final year internship, I contributed to a high-load project intended for airport infrastructure. This opportunity helped me master Go and deep-dive into microservices architecture, where I learned to handle significant traffic and complex asynchronous communications.",
  },
  {
    icon: Lightbulb,
    title: "Philosophy",
    content:
      "I believe in writing clean, efficient, and maintainable code. I prefer simple solutions that are easy to understand and robust enough to handle real-world demands. Beyond coding, I am passionate about sharing knowledge. As the former Head of the High-Level Programming Department at Freeways Club, I led workshops on Git, Linux, and web fundamentals, helping other students build their technical foundations.",
  },
  {
    icon: Rocket,
    title: "Always Growing",
    content:
      "I am always looking to learn new tools, automate repetitive tasks, and contribute to open-source software while crafting impactful engineering solutions.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        About
      </h2>

      <div className="space-y-6">
        {ABOUT_PARAGRAPHS.map((item) => (
          <div
            key={item.title}
            className="group relative p-5 sm:p-6 rounded-xl border border-border bg-card transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b from-foreground/40 to-foreground/10 opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-sm">
        <div className="relative p-2 rounded-2xl bg-gradient-to-br from-muted/20 to-muted/5 backdrop-blur-sm border border-white/10 dark:border-white/20 shadow-xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:brightness-105">
          <img
            src="theprimeagen.gif"
            alt="The Primeagen"
            className="w-full h-auto rounded-xl object-contain transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-3">
          The Primeagen energy I try to channel into my work.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
