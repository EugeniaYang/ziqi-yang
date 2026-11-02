import type { Metadata } from "next";

export const metadata: Metadata = { title: "CV | Ziqi Yang" };

export default function CVPage() {
  return (
    <main id="main-content" className="py-6 sm:py-12">
      <h1 className="mb-4 text-3xl font-bold pastel-title-primary">Curriculum Vitae</h1>
      <p className="mb-2 leading-relaxed">My CV includes research experience, publications, industry work, education, and skills.</p>
      <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>Updated November 1, 2026</p>
      <a href="/files/ziqi_cv.pdf" download="Ziqi_Yang_CV.pdf" className="inline-block rounded-lg px-5 py-3 pastel-button-primary">Download CV (PDF)</a>
      <a href="/files/ziqi_cv.pdf" target="_blank" rel="noopener noreferrer" className="text-link ml-5 inline-block py-3">Open in browser ↗</a>
    </main>
  );
}
