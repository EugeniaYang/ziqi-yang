import type { Metadata } from "next";
import PublicationList from "../components/PublicationList";

export const metadata: Metadata = {
  title: "Research | Ziqi Yang",
  description: "Human–AI interaction research spanning voice agents, creative tools, personal health software, and clinical AI.",
};

const projects = [
  {
    id: "voice-agents",
    title: "Streaming Voice Agents for Creative Image Editing",
    role: "Research Intern · Adobe Research",
    date: "Summer 2026",
    points: [
      "Built a streaming voice-driven editing prototype integrating speech recognition, speech synthesis, LLM intent parsing, and tool orchestration in React/TypeScript and Node.js/Express.",
      "Designed human-in-the-loop workflows for continuous spoken input and multi-step image editing, enabling users to inspect and revise AI actions while retaining creative control.",
      "Led formative studies with 7 participants and a within-subject user study with 6 participants against a turn-based baseline. Combined behavioral event logs, NASA-TLX, Creativity Support Index, and interviews to evaluate workload, creativity support, and perceived control.",
    ],
    tags: ["Voice Agents", "Creative Tools", "Human–AI Collaboration", "Mixed Methods"],
  },
  {
    id: "personal-health-agents",
    title: "AI-Assisted Personal Health Software Development",
    role: "Graduate Student Researcher · UC Irvine",
    date: "2026–Present · Ongoing",
    points: [
      "Curated 124 web records documenting health-related personal software, preserving source provenance and screening metadata.",
      "Conducting qualitative content analysis of LLM- and AI-agent-assisted development to examine health goals, data practices, customization, and verification challenges. This ongoing work aims to inform user-configurable personal health agents.",
    ],
    tags: ["Personal Health Informatics", "AI-Assisted Development", "Qualitative Analysis"],
  },
  {
    id: "ambient-clinical-ai",
    title: "Human-Centered Evaluation of Ambient Clinical AI",
    role: "Research Collaborator · UC Irvine",
    date: "2025–2026",
    points: [
      "Annotated clinician edits to AI-generated clinical notes and iteratively refined annotation guidelines to characterize edit patterns and clinician rationales.",
      "Combined inductive and deductive analysis of clinician interviews and annotated edits to identify failure modes and inform clinician review, correction, and oversight of AI-assisted documentation.",
    ],
    tags: ["Clinical AI", "Human Oversight", "AI Evaluation"],
    papers: ["jamia-edits", "jamia-rationale"],
  },
  {
    id: "family-genetic-health",
    title: "Women's Health and Family Communication",
    role: "Graduate Student Researcher · UC Irvine",
    date: "2024–2026",
    points: [
      "Designed and conducted a mixed-method survey with 249 U.S. women on sharing health experiences influenced by genetic factors within families.",
      "Combined thematic analysis with ordinal logistic regression, Spearman's correlation, and chi-square analyses to examine relationships among reproductive experiences, family context, digital engagement, and genetic-health knowledge and communication.",
      "Also conducting a systematic review of 320 ACM papers to identify requirements for women-centered health technologies and cross-generational communication.",
    ],
    tags: ["Women's Health", "Family Communication", "Genetic Health", "Mixed Methods"],
    papers: ["chi2026", "amia2026"],
  },
  {
    id: "llm-healthcare",
    title: "Conversational and Multimodal AI for Patient–Provider Communication",
    role: "Graduate Student Research Assistant · Northeastern University",
    date: "2023–2024",
    points: [
      "Designed and prototyped LLM-powered voice assistants and multimodal systems for communication and monitoring, including Talk2Care, RECOVER, and CardioAI.",
      "Built voice assistants and clinician dashboards using GPT-4, Alexa, AWS Lambda (Python), and React, integrating conversational and wearable-sensing data.",
      "Used annotation-based evaluation to assess response quality, accuracy, hallucinations, and safety risks, alongside interviews, mixed-method user studies, longitudinal deployments, and computational analyses. Talk2Care received an IMWUT Distinguished Paper Award.",
    ],
    tags: ["Conversational AI", "Healthcare", "Voice Interfaces", "AI Evaluation"],
    papers: ["talk2care", "recover", "cardioai"],
    video: "https://youtu.be/fMMDN7gZGjs",
  },
  {
    id: "social-robots",
    title: "Generative AI, Social Robots, and Learning",
    role: "Research Assistant · Zhejiang University",
    date: "2024",
    points: [
      "Programmed Python behaviors for a NAO social robot and designed a between-subject experiment on generative-AI-driven embodied learning.",
      "Evaluated learning and affective outcomes using ANCOVA and thematic analysis, identifying 23 axial codes and 6 themes with inter-rater reliability κ = 0.85.",
    ],
    tags: ["Human–Robot Interaction", "Education", "Mixed Methods"],
    papers: ["robot"],
  },
  {
    id: "behavior-change",
    title: "Human-Centered AI for Behavior Change",
    role: "Graduate Student Research Assistant · University of Michigan",
    date: "2022–2024",
    points: [
      "Prototyped empathetic exercise-coach chatbots and LLM-powered just-in-time adaptive interventions. Conducted pilot studies, surveys, interviews, and crowdsourced analyses to study long-term user–AI interaction.",
    ],
    tags: ["mHealth", "Behavior Change", "Chatbots", "JITAI"],
  },
  {
    id: "ar-vr",
    title: "Designing Creative AR/VR Experiences for Languages",
    role: "Student Research Programme · University of Michigan",
    date: "2022–2023",
    points: [
      "Designed 3D graphics and prototyped immersive language experiences using Unity and Unreal Engine for Meta Quest, with the final environment deployed via Mozilla Hubs.",
    ],
    tags: ["AR/VR", "Interaction Design", "Languages"],
  },
];

export default function ResearchPage() {
  return (
    <main id="main-content" className="py-6 sm:py-12">
      <h1 className="mb-4 text-3xl font-bold pastel-title-primary">Research</h1>
      <p className="mb-8 max-w-2xl leading-relaxed">I build and study interactive AI systems, connecting technical prototyping with empirical research on how people use, evaluate, and control them.</p>
      <nav aria-label="Research sections" className="mb-12 flex flex-wrap gap-3 text-sm">
        <a className="text-link" href="#voice-agents">Voice agents</a>
        <a className="text-link" href="#personal-health-agents">Personal health</a>
        <a className="text-link" href="#ambient-clinical-ai">Clinical AI</a>
        <a className="text-link" href="#family-genetic-health">Family health</a>
        <a className="text-link" href="#publications">Publications</a>
      </nav>
      <div className="space-y-10">
        {projects.map((project) => (
          <section id={project.id} key={project.id} className="research-card scroll-mt-8 p-5 sm:p-7">
            <p className="mb-2 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{project.role} · {project.date}</p>
            <h2 className="mb-4 text-xl font-semibold pastel-title-primary">{project.title}</h2>
            <ul className="list-disc space-y-3 pl-5 leading-relaxed">
              {project.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="research-tag">{tag}</span>)}</div>
            {project.papers && <div className="mt-6 border-t border-[var(--tea-rose-red)] pt-5"><PublicationList ids={project.papers} /></div>}
            {project.video && <a className="text-link mt-4 inline-block text-sm" href={project.video} target="_blank" rel="noopener noreferrer">Watch the Talk2Care video ↗</a>}
          </section>
        ))}
      </div>
      <section id="publications" className="mt-16 scroll-mt-8">
        <h2 className="section-title">Publications</h2>
        <PublicationList />
      </section>
    </main>
  );
}
