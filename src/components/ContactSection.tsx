import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact-section"
      className="flex flex-col items-center justify-center gap-2 lg:gap-4 min-h-screen px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
      <p className="text-muted-foreground">
        Feel free to reach out—I’d love to hear from you!
      </p>

      <div className="flex flex-col gap-4 mt-6">
        <a
          href="mailto:ayoub.krimi14@gmail.com"
          className="inline-flex items-center justify-center gap-2 text-lg font-medium text-gray-900 hover:underline"
        >
          <Mail className="h-5 w-5" />
          ayoub.krimi14@gmail.com
        </a>

        <a
          href="https://github.com/AyKrimino"
          className="inline-flex justify-center items-center gap-2 text-lg font-medium text-gray-900 hover:underline"
        >
          <Github className="h-5 w-5" />
          github.com/AyKrimino
        </a>

        <a
          href="https://linkedin.com/in/ayoub-krimi"
          className="inline-flex justify-center items-center gap-2 text-lg font-medium text-gray-900 hover:underline"
        >
          <Linkedin className="h-5 w-5" />
          linkedin.com/in/ayoub-krimi
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
