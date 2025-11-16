"use client";

import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Menu as MenuIcon} from "lucide-react";

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
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="backdrop-blur bg-white/20 rounded-b-lg shadow-sm">

          <ul className="hidden md:flex gap-3 items-center justify-center py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${active === item.id
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-gray-900"
                    }`}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex md:hidden items-center py-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Open navigation"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer"
                >
                  <MenuIcon className="h-6 w-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {NAV_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.id} asChild>
                    <a href={`#${item.id}`} className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer ${active == item.id ? "bg-gray-900 text-white" : "text-muted-foreground hover:text-gray-900"}`}>
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </nav>
      </div>
    </header>
  );
}
