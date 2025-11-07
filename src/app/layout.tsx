import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ayoub Krimi | Backend Developer & Distributed Systems Enthusiast",
    description: "Final-year Computer Science student at ISI Ariana passionate about backend engineering, system architecture, and distributed systems. Experienced in Go, Python, and TypeScript — building scalable APIs, CI/CD pipelines, and automation tools. Seeking a backend internship to craft efficient, reliable systems.",
    keywords: [
        "Ayoub Krimi",
        "Backend Developer",
        "Distributed Systems",
        "Go Developer",
        "Python Developer",
        "Django REST Framework",
        "React",
        "Next.js",
        "TypeScript",
        "REST API",
        "System Architecture",
        "DevOps",
        "Linux",
        "CI/CD",
        "Open Source",
        "Software Engineer Internship",
    ],
    authors: [{ name: "Ayoub Krimi" }],
    openGraph: {
        title: "Ayoub Krimi | Backend Developer & Distributed Systems Enthusiast",
        description:
            "Portfolio of Ayoub Krimi — Backend Developer and CS student at ISI Ariana. Experienced in Go, Python, and TypeScript, building scalable systems and automation tools. Explore my projects, skills, and experience.",
        url: "https://aykrimino.github.io/portfolio/",
        siteName: "Ayoub Krimi Portfolio",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={firaCode.className}>{children}</body>
        </html>
    );
}
