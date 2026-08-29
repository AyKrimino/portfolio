"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Lock,
  Building2,
  Calendar,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { ThemeToggle } from "./ThemeToggle";
import type { Project } from "@/types/projects";
import type { ProjectCaseStudy, CaseStudyDocument } from "@/types/case-study";
import { withBasePath } from "@/lib/base-path";

const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

interface CaseStudyViewProps {
  project: Project;
  caseStudy: ProjectCaseStudy;
}

const CaseStudyView = ({ project, caseStudy }: CaseStudyViewProps) => {
  const [activeScreenshot, setActiveScreenshot] = useState<number | null>(
    null,
  );

  const documents: (CaseStudyDocument & { key: string })[] = [
    ...(caseStudy.media.reportDocument
      ? [{ ...caseStudy.media.reportDocument, key: "report" }]
      : []),
    ...(caseStudy.media.presentations ?? []).map((doc, idx) => ({
      ...doc,
      key: `presentation-${idx}`,
    })),
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            href="/#projects-section"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.isClosedSource && (
              <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                <Lock className="h-3 w-3" />
                Closed Source
              </span>
            )}
            {caseStudy.company && (
              <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                <Building2 className="h-3 w-3" />
                {caseStudy.company}
              </span>
            )}
            <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
              <Calendar className="h-3 w-3" />
              {caseStudy.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {caseStudy.tagline}
          </p>
          <p className="text-sm text-muted-foreground/80 mt-2">
            {caseStudy.role}
          </p>
        </div>

        {/* Confidentiality note */}
        {caseStudy.confidentialNote && (
          <div className="flex gap-3 p-4 rounded-xl border border-border/60 bg-muted/20 mb-10">
            <Lock className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {caseStudy.confidentialNote}
            </p>
          </div>
        )}

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="space-y-3">
            {caseStudy.overview.map((p, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-5">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">What I Did</h2>
          <Card className="border-border/60">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {caseStudy.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Architecture */}
        {caseStudy.architecture && caseStudy.architecture.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Architecture</h2>
            <div className="space-y-3">
              {caseStudy.architecture.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Challenges */}
        {caseStudy.challenges && caseStudy.challenges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              Challenges &amp; How I Solved Them
            </h2>
            <div className="space-y-4">
              {caseStudy.challenges.map((challenge) => (
                <Card
                  key={challenge.title}
                  className="border-border/60 hover:border-border transition-colors duration-300"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-base font-semibold mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Video demo */}
        {withBasePath(caseStudy.media.videoSrc || "") && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Demo</h2>
            <div className="rounded-xl overflow-hidden border border-border/60 bg-black">
              <video
                controls
                preload="none"
                poster={caseStudy.media.videoPoster}
                className="w-full h-auto"
              >
                <source src={caseStudy.media.videoSrc} type="video/mp4" />
                Your browser doesn&apos;t support embedded video.
              </video>
            </div>
          </section>
        )}

        {/* Screenshots */}
        {caseStudy.media.screenshots &&
          caseStudy.media.screenshots.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {caseStudy.media.screenshots.map((shot, idx) => (
                  <button
                    key={withBasePath(shot.src)}
                    onClick={() => setActiveScreenshot(idx)}
                    className="group relative aspect-video rounded-lg overflow-hidden border border-border/60 hover:border-border transition-colors cursor-pointer"
                  >
                    <img
                      src={withBasePath(shot.src)}
                      alt={shot.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              <Dialog
                open={activeScreenshot !== null}
                onOpenChange={(open) => !open && setActiveScreenshot(null)}
              >
                <DialogContent className="w-[95vw] max-w-6xl!">
                  {activeScreenshot !== null && (
                    <>
                      <DialogHeader>
                        <DialogTitle>
                          {caseStudy.media.screenshots![activeScreenshot].alt}
                        </DialogTitle>
                      </DialogHeader>
                      <img
                        src={withBasePath(caseStudy.media.screenshots![activeScreenshot].src)}
                        alt={caseStudy.media.screenshots![activeScreenshot].alt}
                        className="w-full h-auto rounded-lg"
                      />
                      {caseStudy.media.screenshots![activeScreenshot]
                        .caption && (
                          <p className="text-sm text-muted-foreground text-center">
                            {
                              caseStudy.media.screenshots![activeScreenshot]
                                .caption
                            }
                          </p>
                        )}
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </section>
          )}

        {/* Documents: report + presentations */}
        {documents.length > 0 && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-4">
              Report &amp; Presentations
            </h2>
            <Tabs defaultValue={documents[0].key}>
              <TabsList className="flex-wrap h-auto">
                {documents.map((doc) => (
                  <TabsTrigger key={doc.key} value={doc.key}>
                    <FileText className="h-3.5 w-3.5 mr-1.5" />
                    {doc.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {documents.map((doc) => (
                <TabsContent key={doc.key} value={doc.key} className="mt-4">
                  <PDFViewer file={withBasePath(doc.src)} downloadFileName={doc.downloadName} />
                  <div className="flex justify-center mt-4">
                    <a href={withBasePath(doc.src)} download={doc.downloadName}>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                        Download {doc.label}
                      </Button>
                    </a>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>
        )}

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-16 pt-10 border-t border-border/50">
          <Link href="/#contact-section">
            <Button className="w-full sm:w-auto">
              Get in Touch
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/#projects-section">
            <Button variant="outline" className="w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyView;
