export interface CaseStudyChallenge {
  title: string;
  description: string;
}

export interface CaseStudyScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyDocument {
  label: string;
  src: string;
  downloadName?: string;
}

export interface CaseStudyMedia {
  screenshots?: CaseStudyScreenshot[];
  videoSrc?: string;
  videoPoster?: string;
  reportDocument?: CaseStudyDocument;
  presentations?: CaseStudyDocument[];
}

export interface ProjectCaseStudy {
  slug: string;
  company?: string;
  confidentialNote?: string;
  tagline: string;
  role: string;
  period: string;
  overview: string[];
  highlights: string[];
  architecture?: string[];
  challenges?: CaseStudyChallenge[];
  techStack: string[];
  media: CaseStudyMedia;
}
