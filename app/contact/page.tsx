import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "Get in touch with Nipun Yasas for freelance work, internships, or collaborations.",
};

export default function ContactPage() {
    return <ContactClient />;
}
