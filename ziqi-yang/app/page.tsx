import Image from "next/image";
import Link from "next/link";
import PublicationList from "./components/PublicationList";

export default function Home() {
  return (
    <main id="main-content" className="py-6 sm:py-12">
      <section className="mb-16 flex flex-col items-center gap-8 md:flex-row md:gap-10">
        <Image src="/profile-portugal.png" alt="Ziqi Yang" width={180} height={180} priority className="rounded-full shadow-lg" />
        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-semibold tracking-wide">HUMAN–AI INTERACTION RESEARCHER</p>
          <h1 className="mb-3 text-4xl font-bold pastel-title-primary">Ziqi Yang</h1>
          <p className="mb-5 text-lg leading-relaxed">PhD student in Informatics at UC Irvine. I build and evaluate AI agents and interactive systems for creative work and healthcare.</p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Link href="/research" className="rounded-lg px-4 py-2 pastel-button-primary">Research</Link>
            <Link href="/ux-projects" className="rounded-lg px-4 py-2 pastel-button-secondary">Design / UX Projects</Link>
            <a href="/files/ziqi_cv.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[var(--tea-rose-red)] px-4 py-2">CV ↗</a>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="section-title">About Me</h2>
        <p className="mb-4 leading-relaxed">I am a PhD student at the University of California, Irvine, co-advised by Prof. Yunan Chen and Prof. Daniel A. Epstein. My research asks how people can work with, understand, and retain control over AI systems. I combine full-stack prototyping with mixed-methods evaluation, focusing on voice interaction, human–agent collaboration, and personal health informatics.</p>
        <p className="mb-4 leading-relaxed">In summer 2026, I was a Research Intern at Adobe Research, working on streaming voice agents for creative image editing. My other industry experience includes Microsoft, eBay, and Xiaohongshu. I received my M.S. in Information from the University of Michigan and B.S. in Electrical and Computer Engineering from Shanghai Jiao Tong University.</p>
        <p className="leading-relaxed">Outside of research, I enjoy travelling, photography, and exploring new sports. I am always happy to connect about research, opportunities, and collaborations!</p>
      </section>

      <section className="mb-14">
        <h2 className="section-title">News</h2>
        <ul className="space-y-4">
          <li><span className="research-tag mr-2">2026</span>Our paper on family context and women&apos;s genetic health knowledge and communication was accepted to AMIA 2026.</li>
          <li><span className="research-tag mr-2">Summer 2026</span>I joined Adobe Research as a Research Intern to explore streaming voice interaction for creative image editing.</li>
          <li><span className="research-tag mr-2">2026</span>Our two papers on clinician edits and review of ambient AI-drafted clinical notes were published in <em>JAMIA</em>.</li>
          <li><span className="research-tag mr-2">2026</span>Our work on sharing women&apos;s genetic health experiences appeared at CHI 2026, and RECOVER appeared in PACMHCI for CSCW 2026.</li>
          <li><span className="research-tag mr-2">2025</span>Talk2Care received an IMWUT Distinguished Paper Award.</li>
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="section-title">Research Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="research-card">
            <div className="flex min-h-40 flex-col justify-center gap-3 bg-[var(--tea-rose-red)] p-6 text-[#463541]">
              <span className="text-xs font-semibold tracking-widest">ADOBE RESEARCH · SUMMER 2026</span>
              <p className="text-2xl font-semibold" style={{ color: "inherit" }}>Speak. Create. Refine.</p>
              <p className="text-sm" style={{ color: "inherit" }}>Voice interaction × creative control</p>
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold">Streaming Voice Agents for Creative Image Editing</h3>
              <p className="mb-4 text-sm leading-relaxed">Built an LLM-powered voice editing prototype and studied how continuous spoken interaction supports creative workflows and user control.</p>
              <Link className="text-link" href="/research#voice-agents">Explore project →</Link>
            </div>
          </article>
          <article className="research-card">
            <div className="flex min-h-40 flex-col justify-center gap-3 bg-[var(--vanilla)] p-6 text-[#463541]">
              <span className="text-xs font-semibold tracking-widest">UC IRVINE · ONGOING</span>
              <p className="text-2xl font-semibold" style={{ color: "inherit" }}>Personal health, personal tools.</p>
              <p className="text-sm" style={{ color: "inherit" }}>AI-assisted development × everyday needs</p>
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold">AI-Assisted Personal Health Software</h3>
              <p className="mb-4 text-sm leading-relaxed">Investigating how people use LLMs and AI agents to develop personal health software, with attention to customization, data practices, and verification.</p>
              <Link className="text-link" href="/research#personal-health-agents">Explore project →</Link>
            </div>
          </article>
          <article className="research-card">
            <div className="flex h-48 items-center justify-center bg-[#fef9fb] p-5">
              <Image src="/projects/family-tree-annotate-final.svg" alt="Family tree illustrating genetic health experiences across generations" width={600} height={400} className="max-h-full w-auto object-contain" />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold">Women&apos;s Health and Family Communication</h3>
              <p className="mb-2 text-sm font-medium">CHI 2026 · AMIA 2026 (accepted)</p>
              <p className="mb-4 text-sm leading-relaxed">A mixed-method survey with 249 U.S. women on sharing health experiences influenced by genetic factors within families.</p>
              <Link className="text-link" href="/research#family-genetic-health">Explore project →</Link>
            </div>
          </article>
          <article className="research-card">
            <Image src="/projects/talk2care.png" alt="Talk2Care voice assistant and clinician dashboard" width={600} height={400} className="h-48 w-full object-contain bg-white" />
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold">Talk2Care: Voice AI for Patient–Provider Communication</h3>
              <p className="mb-2 text-sm font-medium">IMWUT 2024 · Distinguished Paper Award</p>
              <p className="mb-4 text-sm leading-relaxed">Designed and evaluated an LLM-based voice assistant and clinician dashboard to support communication between older adults and healthcare providers.</p>
              <Link className="text-link" href="/research#llm-healthcare">Explore project →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="section-title mb-0">Selected Publications</h2>
          <Link href="/research#publications" className="text-link text-sm">All publications →</Link>
        </div>
        <PublicationList ids={["amia2026", "chi2026", "recover", "jamia-edits", "talk2care"]} />
      </section>

      <section>
        <h2 className="section-title">UX Research &amp; Design Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <a href="https://ziqi-yang.notion.site/Big-Data-Hub-PM-Design-2859ea4a2d0080e2bd0fda685aa731f7" className="research-card block transition-shadow hover:shadow-lg">
            <Image src="/projects/big-data-hub.png" alt="eBay Big Data Hub design project" width={600} height={400} className="h-44 w-full object-cover" />
            <div className="p-5"><h3 className="mb-2 font-semibold">Understanding Professionals to Design Data Pipelines for eBay Big Data Hub</h3><p className="text-sm">User Research · Product Management · UX Design</p></div>
          </a>
          <a href="https://ziqis-portfolio.webflow.io/work/myvoice" className="research-card block transition-shadow hover:shadow-lg">
            <Image src="/projects/myvoice.png" alt="MyVoice youth-centered website design" width={600} height={400} className="h-44 w-full object-cover" />
            <div className="p-5"><h3 className="mb-2 font-semibold">Understanding Multiple Stakeholders for a Youth-Centered Website</h3><p className="text-sm">User Research · UX Design</p></div>
          </a>
        </div>
      </section>
    </main>
  );
}
