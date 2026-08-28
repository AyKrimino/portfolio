import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/case-studies";
import { projects } from "@/data/projects";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES[slug];
  const project = projects.find((p) => p.slug === slug);

  if (!caseStudy || !project) {
    notFound();
  }

  return <CaseStudyView project={project} caseStudy={caseStudy} />;
}
