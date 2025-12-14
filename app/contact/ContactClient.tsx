"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
} from "@tabler/icons-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sampleArcs } from "@/lib/sampleArcs";
import { useThemeColor } from "../hooks/useThemeColor";

import { Label } from "../_components/inputs/label";
import { Input } from "../_components/inputs/input";
import { TextArea } from "../_components/inputs/textarea";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../_components/Accordion";

import BlurText from "../_components/BlurText";
import { Button } from "../_components/Button";

const questions = [
  {
    value: "job",
    title: "1. Are you open to freelance, part-time work, or internships ?",
    content:
      "Yes, but currently I’m focused on securing a Software Engineering internship. I am looking for a 6-month internship that begins in January 2026. Also, I'm open to freelance and part-time opportunities that align with software engineering, web development, or AI/ML-focused roles.",
  },
  {
    value: "specialization",
    title: "2. What technologies do you specialize in ?",
    content:
      "I specialize in full-stack web development using technologies such as React, Next.js, TypeScript, Node.js, and Java Spring Boot.I'm also exploring Mobile Development and AI/ML to expand my engineering skillset.",
  },
  {
    value: "projects",
    title: "3. What types of projects have you worked on ?",
    content:
      "I’ve built real-world applications across web, mobile, AI/ML, and IoT, including full-stack applications, ML models, and hardware-software integrated systems.I enjoy turning ideas into complete, working products.",
  },
  {
    value: "technologies",
    title: "4. Are you actively learning new technologies ?",
    content:
      "Absolutely. I’m currently exploring mobile development (React Native) and strengthening my foundation in AI/ML with tools like TensorFlow, Scikit-Learn, and Python, as well as exploring containerization and orchestration using Docker, Kubernetes, and cloud providers like AWS.",
  },
  {
    value: "work",
    title: "4. What motivates your work ?",
    content:
      "I’m driven by the idea of building useful software solutions that make life easier. I love solving problems and creating products that people can actually use.",
  },
  {
    value: "improvements",
    title:
      "5. How do you keep improving your technical and non-technical skills ?",
    content:
      "I believe growth comes from doing, not just studying. I actively participate in CTFs, datathons, coding competitions, and web development challenges to sharpen my technical skills and build real-world projects. These experiences also help me improve teamwork, communication, problem-solving, decision-making, and presenting ideas effectively.",
  },
  {
    value: "goals",
    title: "6. What are your long-term goals ?",
    content:
      "To become a well-rounded Software Engineer skilled in full-stack development, AI/ML, and mobile technologies and build meaningful products that solve real-world problems",
  },
];

const World = dynamic(
  () => import("../_components/Globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are missing.");
        toast.error("Configuration error. Please check environment variables.");
        setSubmitting(false);
        return;
      }

      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: values.fullName,
            from_email: values.email,
            message: values.message,
          },
          publicKey
        )
        .then(
          () => {
            toast.success("Message sent successfully!");
            resetForm();
          },
          (error) => {
            console.error("FAILED...", error.text);
            toast.error("Failed to send message. Please try again.");
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  const globeColor = useThemeColor("--globe-color");
  const polygonColor = useThemeColor("--polygon-color");
  const atmosphereColor = useThemeColor("--atmosphere-color");

  const globeConfig = React.useMemo(
    () => ({
      pointSize: 2,
      globeColor: globeColor,
      showAtmosphere: true,
      atmosphereColor: atmosphereColor,
      atmosphereAltitude: 0.1,
      emissive: globeColor,
      emissiveIntensity: 0.1,
      shininess: 0.5,
      polygonColor: polygonColor,
      ambientLight: "#ffffff",
      directionalLeftLight: "#000000",
      directionalTopLight: "#ffffff",
      pointLight: "#ffffff",
      arcTime: 1000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 22.3193, lng: 114.1694 },
      autoRotate: true,
      autoRotateSpeed: 0.5,
      hexPolygonResolution: 3,
    }),
    [globeColor, polygonColor, atmosphereColor]
  );

  return (
    <div>
      <div className="pb-4 pt-32 sm:pt-32 px-4 sm:px-6 md:px-12 lg:px-12 w-full max-w-7xl mx-auto">
        <div className="items-center gap-2 mb-4 justify-start">
          <h1 className="font-header text-primary flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkle"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            </svg>
            Contact Me
          </h1>
          <BlurText
            text="Let's start a project together"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl py-2 font-bold font-header"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 relative overflow-hidden">
          <div className="w-full justify-between md:w-2/5 lg:w-1/2">
            <form className="my-8" onSubmit={formik.handleSubmit}>
              <div className="mb-4 flex flex-col space-y-8 md:space-y-4 md:space-x-2">
                <div className="flex w-full flex-col space-y-4">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                </div>
                <div className="flex w-full flex-col space-y-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="name@gmail.com"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="flex w-full flex-col space-y-4">
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="h-32"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 text-xs">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex justify-center w-full mt-8 sm:mt-4">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
          <div className="w-full h-[40vh] min-[400px]:h-[50vh] min-[500px]:h-[60vh] min-[600px]:h-[70vh] md:h-[60vh] lg:h-[70vh] md:w-3/5 lg:w-1/2">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
        <div className="w-full pb-8 pt-16 sm:pt-24 lg:pt-16 flex flex-col min-[860px]:flex-row gap-4 relative items-start">
          <div className="min-[860px]:w-1/3 w-full min-[860px]:sticky min-[860px]:top-120 h-fit">
            <h1 className="font-header text-primary flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkle"
                aria-hidden="true"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              </svg>
              FAQ s
            </h1>
            <BlurText
              text="Have Questions"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl py-2 font-bold font-header"
            />
          </div>
          <div className="min-[860px]:w-2/3 w-full mt-4">
            <Accordion className="w-full" collapsible type="single">
              {questions.map((item) => (
                <AccordionItem
                  className="overflow-hidden border bg-backgroundSecondary px-4 rounded-xl mb-4"
                  key={item.value}
                  value={item.value}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-start text-left">
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="ps-7">
                    <p className="text-textPrimary text-sm">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}
