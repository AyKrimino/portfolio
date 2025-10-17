"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { ChevronDown } from "lucide-react";
import { Card } from "./ui/card";
import { projects } from "@/data/projects";
import Link from "next/link";

const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section
      id="projects-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="space-y-4 md:space-y-6">
        {featuredProjects.map((project) => (
          <Card key={project.slug} className="p-4 lg:p-6">
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="text-xl font-semibold">
                {project.shortTitle || project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                {project.links.github && (
                  <Link
                    href={project.links.github.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 hover:underline"
                  >
                    GitHub
                  </Link>
                )}
                {project.links.liveDemo && (
                  <Link
                    href={project.links.liveDemo.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 hover:underline"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <button
        onClick={() => scrollToSection("resume-section")}
        className="mt-6 w-full flex justify-center"
        type="button"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 hover:text-gray-900 cursor-pointer hover:scale-150 transition-all duration-300 delay-75" />
      </button>
    </section>
  );
};

export default ProjectsSection;
