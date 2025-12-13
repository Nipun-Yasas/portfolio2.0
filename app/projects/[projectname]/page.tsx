import { Metadata } from "next";
import ProjectDetailClient from "./ProjectDetailClient";
import { projects } from "../../../lib/projectData";

type Props = {
  params: { projectname: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.projectname;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.projectName,
    description: project.description,
    openGraph: {
      title: project.projectName,
      description: project.description,
      images: project.src ? [project.src] : [],
    }
  };
}

export default function ProjectPage() {
  return <ProjectDetailClient />;
}
