"use client";

import { Card } from "./ui/card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((project) => project.isFeatured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id="projects-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="space-y-4 md:space-y-6">
        {displayedProjects.map((project) => (
          <Card
            key={project.slug}
            className="p-4 lg:p-6 transition-transform duration-200 ease-in-out hover:scale-105 shadow-md hover:shadow-xl rounded-xl hover:bg-white/50"
          >
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
                    className="text-sm font-medium text-gray-900 hover:underline hover:text-muted-foreground transition-colors duration-150 ease-in-out"
                  >
                    GitHub
                  </Link>
                )}
                {project.links.liveDemo && (
                  <Link
                    href={project.links.liveDemo.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 hover:underline hover:text-muted-foreground transition-colors duration-150 ease-in-out"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </Card>
        ))}
        <Button
          className="hover:cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less ▲" : "Show All Projects ▼"}
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
