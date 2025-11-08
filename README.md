# Personal Portfolio – Ayoub Krimi

This is my personal portfolio website built with **Next.js**, **React.js**, and **Tailwind CSS**.  
It showcases my work, skills, and background as a backend and full-stack developer.

## Overview

The site is structured as a single-page layout with smooth scrolling and distinct sections:
- **Home** – brief introduction and focus areas.
- **About** – short background and what I work on.
- **Projects** – selected personal and academic projects.
- **Resume** – link to my CV and professional experience.
- **Contact** – ways to reach me.

Each section takes a full viewport height for a clean and focused presentation.  
A sticky navigation bar highlights the active section as the user scrolls.

## Stack

- **Next.js (App Router)**
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI Components**
- **Lucide Icons**

## Features

- Responsive design for all screen sizes
- Intersection Observer–based active navigation tracking
- Smooth scrolling between sections
- Simple deployment setup for GitHub Pages
- Minimal and fast static site (no backend)

## Local Development

```bash
# install dependencies
npm install

# run locally
npm run dev


Then open [http://localhost:3000](http://localhost:3000).

## Build and Export

```bash
# build for production
npm run build

# export static files
npm run export
```

Static files are generated inside the `out/` directory.
You can serve them locally using:

```bash
npx serve out
```

## Deployment

This site is designed to be hosted on **GitHub Pages**.
The workflow can be automated using a simple GitHub Action, but manual export + push to the `gh-pages` branch works as well.

---

Built and maintained by **Ayoub Krimi**.
