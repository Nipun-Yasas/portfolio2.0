"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../lib/projectData";

import { Button } from "../../_components/Button";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.projectname as string;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">Project not found</div>
      </div>
    );
  }

  const prevIndex = (projectIndex - 1 + projects.length) % projects.length;
  const nextIndex = (projectIndex + 1) % projects.length;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <div>
      <div className="pt-24 smLpt-20 md:pt-24 lg:pt-28 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto min-h-screen flex flex-col">
        <div className="flex flex-col gap-8 flex-1">
          <Link
            href="/projects"
            className="text-textPrimary hover:underline opacity-70 hover:opacity-100 transition-opacity w-fit flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <div className="relative w-full lg:h-[510px] aspect-video rounded-3xl overflow-hidden ">
            <Image
              src={project.src}
              alt={project.projectName}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Header: Title and Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold font-header text-textPrimary">
              {project.projectName}
            </h1>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && project.demoUrl.trim() !== "" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <ExternalLink className="w-4 h-4" /> Demo
                  </Button>
                </a>
              )}
              {project.repoUrl && project.repoUrl.trim() !== "" && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </a>
              )}
              {project.frontendRepo && project.frontendRepo.trim() !== "" && (
                <a
                  href={project.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Github className="w-4 h-4" /> Front
                  </Button>
                </a>
              )}
              {project.backendRepo && project.backendRepo.trim() !== "" && (
                <a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Github className="w-4 h-4" /> Back
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="order-2 md:w-1/4 space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-textPrimary text-sm font-medium tracking-wider">
                  Role
                </span>
                <span className="text-textPrimary/80 font-light text-sm">
                  {project.role}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-textPrimary text-sm font-medium tracking-wider">
                  Year
                </span>
                <span className="text-textPrimary/80 font-light text-sm">
                  {project.year}
                </span>
              </div>
            </div>

            <div className="order-1 md:w-3/4 space-y-6">
              <div className="prose prose-invert max-w-none text-textPrimary">
                <p className="text-lg text-textPrimary/80 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="space-y-4 mt-4">
                    <h3 className="text-lg text-textPrimary">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="px-3 py-2 bg-backgroundSecondary rounded-xl text-sm font-light text-textPrimary border border-borderPrimary hover:bg-hoverPrimary transition-colors"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {project.techSummary && (
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-semibold font-header text-textPrimary">
                Tech Stack Summary
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
                {project.techSummary.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="text-textPrimary">
                      <span className="font-medium">{item.label}: </span>
                      <span className="text-textPrimary/80 font-light">
                        {item.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-semibold font-header text-textPrimary">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="text-textPrimary leading-relaxed">
                      <span className="text-lg font-medium text-textPrimary">
                        {feature.title}:{" "}
                      </span>
                      <span className="text-textPrimary/80 font-light text-sm sm:text-base">
                        {feature.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between gap-4 py-12 border-t border-borderPrimary mt-auto">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" /> {prevProject.projectName}
              </Button>
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                {nextProject.projectName} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
