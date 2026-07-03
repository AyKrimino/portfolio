"use client";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((project) => project.isFeatured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id="projects-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="space-y-6">
        {displayedProjects.map((project) => (
          <Card
            key={project.slug}
            className="group relative overflow-hidden border-border/60 hover:border-border transition-colors duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <CardTitle className="text-lg sm:text-xl">
                    {project.shortTitle || project.title}
                  </CardTitle>
                  {project.isFeatured && (
                    <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>
                {project.date && (
                  <span className="shrink-0 text-xs text-muted-foreground mt-1">
                    {project.date}
                  </span>
                )}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {project.links.github && (
                  <Link
                    href={project.links.github.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </Link>
                )}
                {project.links.liveDemo && (
                  <Link
                    href={project.links.liveDemo.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            className="group"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All Projects"}
            <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
              {showAll ? "▲" : "▼"}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
