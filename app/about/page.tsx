import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "Learn more about Nipun Yasas, an aspiring Software Engineer with a passion for web, mobile, and AI technologies.",
};

export default function AboutPage() {
    return <AboutClient />;
}
