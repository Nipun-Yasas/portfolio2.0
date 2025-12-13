import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nipun Yasas Portfolio",
    short_name: "Nipun Yasas",
    description: "Portfolio of Nipun Yasas, Software Engineer",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/profile.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
