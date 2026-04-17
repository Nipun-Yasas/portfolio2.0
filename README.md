# Portfolio 2.0

Personal portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Overview

This project powers a multi-page developer portfolio with:

- Home page sections (Hero, About, Projects, Expertise)
- Dedicated About, Projects, and Contact pages
- Dynamic project detail pages via slug-based routing
- Theme support (light/dark) with custom design tokens
- Animated UI elements (GSAP, Framer Motion, and custom components)
- Contact form integration using EmailJS
- SEO metadata, sitemap, and robots support

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- UI: React 19, Tailwind CSS 4
- Animation: GSAP, Framer Motion, Motion
- 3D/Visuals: Three.js, React Three Fiber, Drei, three-globe
- Forms and Validation: Formik, Yup
- Notifications: react-toastify

## Project Structure

```text
app/
  _components/            Reusable UI components and section components
  about/                  About page route
  contact/                Contact page route and form logic
  projects/               Projects listing + dynamic project detail route
    [projectname]/        Dynamic project detail page
  globals.css             Global styles and theme variables
  layout.tsx              Root layout, metadata, navigation, footer
  page.tsx                Home page
lib/
  projectData.ts          Project content used across project pages
  logos.tsx               Logo data
  sampleArcs.ts           Globe arc data for contact visuals
public/
  awards/
  experience/
  expertise/
  gallery/
  projects/
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Create a `.env.local` file in the project root for the contact form:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these variables, contact form submission will fail with a configuration error.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Customization Guide

- Update site metadata and social previews in `app/layout.tsx`
- Update project cards and project detail content in `lib/projectData.ts`
- Add or replace static media under `public/`
- Adjust global colors and theme tokens in `app/globals.css`

## Deployment

The app can be deployed on Vercel or any platform that supports Next.js.

Typical production workflow:

```bash
npm run build
npm run start
```

## Notes

- Remote image hosts are configured in `next.config.ts`
- The dynamic project route is available at `/projects/[projectname]`