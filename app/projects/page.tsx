import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
    title: "My Projects",
    description: "Explore the portfolio of projects by Nipun Yasas, featuring web, mobile, and AI applications.",
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
