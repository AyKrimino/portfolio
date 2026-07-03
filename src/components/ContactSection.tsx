import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const LINK_ITEMS = [
  {
    id: "gmail",
    url: "mailto:ayoub.krimi14@gmail.com",
    label: "Email",
    detail: "ayoub.krimi14@gmail.com",
    IconComponent: Mail,
    external: false,
  },
  {
    id: "github",
    url: "https://github.com/AyKrimino",
    label: "GitHub",
    detail: "@AyKrimino",
    IconComponent: Github,
    external: true,
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/ayoub-krimi",
    label: "LinkedIn",
    detail: "in/ayoub-krimi",
    IconComponent: Linkedin,
    external: true,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        Contact
      </h2>

      <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
        Let&apos;s connect. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
        {LINK_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 text-center transition-all duration-300 hover:border-border hover:shadow-lg hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
              <item.IconComponent className="h-6 w-6" />
            </div>

            <h3 className="text-base font-semibold mb-0.5">{item.label}</h3>
            <p className="text-xs text-muted-foreground">{item.detail}</p>

            {item.external && (
              <ArrowUpRight className="absolute top-3 right-3 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </a>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-sm">
        <div className="relative p-2 rounded-2xl bg-gradient-to-br from-muted/20 to-muted/5 backdrop-blur-sm border border-white/10 dark:border-white/20 shadow-xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:brightness-105">
          <img
            src="demo.gif"
            alt="Portfolio demo"
            className="w-full h-auto rounded-xl object-contain transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
