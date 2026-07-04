"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "hero-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "projects-section", label: "Projects" },
  { id: "skills-section", label: "Skills" },
  { id: "resume-section", label: "Resume" },
  { id: "contact-section", label: "Contact" },
];

export default function StickyNav() {
  const [active, setActive] = useState<string>("hero-section");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 };
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(item.id);
        });
      }, options);
      io.observe(el);
      observers.push(io);
    });

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`
            flex items-center justify-between
            backdrop-blur-xl
            rounded-b-2xl border-b px-6 py-2
            transition-all duration-300
            ${scrolled
              ? "bg-background/80 shadow-lg border-border/50"
              : "bg-background/20 border-transparent"
            }
          `}
        >
          <div className="hidden md:flex flex-1" />

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                  {active === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex flex-1 justify-end">
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center justify-between w-full">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open navigation"
                  className="p-2 rounded-md hover:bg-muted transition-colors cursor-pointer"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-1 mt-12">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose key={item.id} asChild>
                      <a
                        href={`#${item.id}`}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          active === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                        aria-current={active === item.id ? "true" : undefined}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
