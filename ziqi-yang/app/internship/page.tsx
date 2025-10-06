import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  subtitle: string;
  href: string;
  category: string;
  imageSrc?: string; // optional placeholder or real image path
};

const projects: Project[] = [
  {
    title: "Designing for Big Data Hub: Professionals' Data Pipelines",
    subtitle: "Internship at eBay",
    href: "https://ziqi-yang.notion.site/Big-Data-Hub-PM-Design-158c4c00f2ad4c3e82e0680dd2231cf5",
    category: "UX Research and Design Internships",
    imageSrc: "/projects/big-data-hub.png",
  },
    {
    title: "Designing for Sustainable and Efficient Supply Chain Management with Interactions and AI",
    subtitle: "Internship at Microsoft C+AI Dynamics 365",
    href: "https://ziqis-portfolio.webflow.io/work/microsoft",
    category: "UX Research and Design Internships",
    imageSrc: "/projects/microsoft-cover.png",
  },
  {
    title: "Campus Connect",
    subtitle: "UX Research and Design for Campust Social App",
    href: "https://ziqis-portfolio.webflow.io/work/campus-connect",
    category: "UX R&D Projects",
    imageSrc: "/projects/campus-connect.png",
  },
    {
    title: "MyVoice Website Optimization",
    subtitle: "UX Research and Design for Youth",
    href: "  https://ziqis-portfolio.webflow.io/work/myvoice",
    category: "UX R&D Projects",
    imageSrc: "/projects/myvoice.png",
  },
  {
    title: "APP Rutabagga UI",
    subtitle: "App Interface Design",
    href: "https://ziqi-yang.notion.site/APP-Rutabagga-UI-8dfaa9decf474ff1a7a15995c7e89b0a",
    category: "Graphic Design",
    imageSrc: "/projects/rutabagga.png",
  },
  {
    title: "Graphic Design Showcase",
    subtitle: "Photography, Banner, and Inforgraphics",
    href: "https://ziqis-portfolio.webflow.io/work/graphic-design",
    category: "Graphic Design",
    imageSrc: "/projects/infographics.png",
  },

];

export default function DesignProjectsPage() {
  // compute unique categories
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Design / UX Projects</h1>
      <p className="text-gray-700 mb-8">
        Below are selected interaction, graphic, and internship design works. Click to explore detail.
      </p>

      {categories.map((cat) => (
        <section key={cat} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.category === cat)
              .map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  {p.imageSrc && (
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.subtitle}</p>
                  </div>
                </a>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
