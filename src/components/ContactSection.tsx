import { Github, Linkedin, Mail } from "lucide-react";

const LINK_ITEMS = [
  {
    id: "gmail",
    url: "mailto:ayoub.krimi14@gmail.com",
    label: "ayoub.krimi14@gmail.com",
    IconComponent: Mail,
  },
  {
    id: "github",
    url: "https://github.com/AyKrimino",
    label: "github.com/AyKrimino",
    IconComponent: Github,
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/ayoub-krimi",
    label: "linkedin.com/in/ayoub-krimi",
    IconComponent: Linkedin,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="min-h-screen flex flex-col items-center justify-center gap-2 lg:gap-4 px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
      <p className="text-muted-foreground">
        Feel free to reach out—I’d love to hear from you!
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {LINK_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="inline-flex items-center justify-center gap-2 text-lg font-medium text-gray-900 hover:underline"
          >
            <item.IconComponent className="h-5 w-5" />
            {item.label}
          </a>
        ))}
      </div>
      <img
        src="demo.gif"
        alt="demo"
        className="mx-auto mt-10 max-w-[260px] sm:max-w-[300px] lg:max-w-[350px] w-full h-auto rounded-xl shadow-lg object-contain"
      />
    </section>
  );
};

export default ContactSection;
