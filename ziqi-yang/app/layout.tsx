import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://ziqi-yang.vercel.app"),
  title: "Ziqi Yang",
  description: "Ziqi Yang is a PhD researcher at UC Irvine building and evaluating AI agents and interactive systems for creative work and healthcare.",
  openGraph: {
    title: "Ziqi Yang · Human–AI Interaction Researcher",
    description: "Voice agents, creative tools, and human-centered AI for healthcare. PhD student in Informatics at UC Irvine.",
    url: "https://ziqi-yang.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (process.env.MAINTENANCE_MODE === "true") {
    return <html lang="en"><body>{children}</body></html>;
  }

  return (
    <html lang="en">
      <body className="mx-auto max-w-4xl px-5 py-6 font-sans sm:px-8">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <header>
          <nav aria-label="Main navigation" className="mb-6 flex flex-wrap items-center justify-between gap-5 border-b border-[var(--tea-rose-red)] pb-5">
            <Link href="/" className="text-xl font-bold pastel-title-primary">Ziqi Yang</Link>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Link href="/research">Research</Link>
              <Link href="/ux-projects">Design / UX Projects</Link>
              <Link href="/cv">CV</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-16 border-t border-[var(--tea-rose-red)] pt-6 text-center text-sm">
          <div className="mb-3 flex flex-wrap justify-center gap-x-5 gap-y-3">
            <a className="text-link" href="mailto:ziqiy30@uci.edu">Email</a>
            <a className="text-link" href="https://scholar.google.com/citations?user=mOC0708AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a className="text-link" href="https://github.com/EugeniaYang" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-link" href="https://www.linkedin.com/in/ziqiyang0605/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()} Ziqi Yang</p>
        </footer>
      </body>
    </html>
  );
}
