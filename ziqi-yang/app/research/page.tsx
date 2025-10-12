import Image from "next/image";

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 pastel-title-primary">Research</h1>

      {/* Section: Family Genetic Health */}
      <section id="family-genetic-health" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 pastel-title-primary">Family Genetic Health</h2>
        
        {/* UCI Research Experience */}
        <div className="border rounded-lg shadow-sm p-6 mb-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="text-lg font-semibold mb-2">Graduate Student Researcher</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            University of California, Irvine | 2024 – Present
          </p>
          <h4 className="font-semibold mb-3" style={{ color: 'var(--title-melon-dark)' }}>Women&apos;s Health Systematic Review and Genetic Health Survey</h4>
          
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Conducted a systematic literature review on women&apos;s health in HCI, mapping research trends and identifying design gaps.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Designed and deployed a mixed-method survey with 249 U.S. women to study inter-generational sharing of genetic health experiences.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Analyzed survey data to surface narrative patterns and barriers, informing speculative design opportunities for genetic health sharing, such as AI-driven storytelling.
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--lavender-blush)', color: 'var(--text-primary)' }}>Women&apos;s Health</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'white' }}>Genetic Factors</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--vanilla)', color: 'var(--text-primary)' }}>HCI</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--melon)', color: 'white' }}>Mixed Methods</span>
          </div>
        </div>
      </section>

      {/* Section: LLM for Healthcare Communication */}
      <section id="llm-healthcare" className="mb-16">
        
        <h2 className="text-2xl font-semibold mb-6 pastel-title-primary">LLM for Healthcare Communication</h2>
        
        {/* Northeastern Research Experience */}
        <div className="border rounded-lg shadow-sm p-6 mb-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="text-lg font-semibold mb-2">Graduate Student Research Assistant</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            Northeastern University | 2021-2023
          </p>
          <h4 className="font-semibold mb-3" style={{ color: 'var(--title-melon-dark)' }}>LLM-Facilitated Patient–Provider Communication</h4>
          
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Conducted interviews with 19 older adults and healthcare providers to uncover communication barriers and design opportunities for LLM-powered systems.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Designed and developed Talk2Care, integrating a voice assistant (Alexa + Python Lambda) for patients and an information dashboard (Figma, React) for providers with GPT-4.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Ran mixed-method user studies (Qualtrics SUS survey + interviews), demonstrating strong usability and surfacing design implications for LLM-mediated communication.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Tested LLaMA-2 (7B/13B/70B) models on Amazon BedRock and SageMaker, exploring customization, personalization, and scalability for healthcare contexts.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Facilitated participatory design sessions with cancer care providers and patients; developed a GPT-4–enabled monitoring system, RECOVER, and conducted multi-stage deployment studies and mixed-method evaluation.
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--melon)', color: 'white' }}>LLM</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--icterine)', color: 'var(--text-primary)' }}>Voice Assistant</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'white' }}>Healthcare</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--vanilla)', color: 'var(--text-primary)' }}>User Studies</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--lavender-blush)', color: 'var(--text-primary)' }}>Mixed Methods</span>
          </div>
          
          <div className="mt-3">
            <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Deliverables</p>
            <div className="space-y-2">
              <div>
                <a
                  href="https://doi.org/10.1145/3659625"
                  className="hover:underline transition-colors"
                  style={{ color: 'var(--title-melon-dark)' }}
                  target="_blank"
                >
                  📄 Talk2Care: An LLM-based Voice Assistant for Communication between Healthcare Providers and Older Adults - IMWUT{"'"}24 [Distinguished Paper Award]
                </a>
              </div>
              <div>
                <a
                  href="https://doi.org/10.1145/3706598.3714272"
                  className="hover:underline transition-colors"
                  style={{ color: 'var(--title-melon-dark)' }}
                  target="_blank"
                >
                  📄 CardioAI: A Multimodal AI-based System to Support Symptom Monitoring and Risk Prediction of Cancer Treatment-Induced Cardiotoxicity - CHI {"'"}25
                </a>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Section: Social Robots & Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 pastel-title-primary">Social Robots & Education</h2>
        
        {/* Zhejiang University Research Experience */}
        <div className="border rounded-lg shadow-sm p-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="text-lg font-semibold mb-2">Research Assistant</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            Zhejiang University | 2024
          </p>
          <h4 className="font-semibold mb-3" style={{ color: 'var(--title-melon-dark)' }}>Social Robots and Education</h4>
          
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Programmed Python scripts for the NAO social robot and designed a between-subject experiment on generative AI–driven embodied learning.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Applied quantitative analysis (learning and emotion scales, ANCOVA) to evaluate knowledge acquisition and emotional outcomes.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Led qualitative analysis for survey data using iterative coding and thematic analysis, identifying 23 axial codes and 6 themes (inter-rater reliability k=0.85).
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--lavender-blush)', color: 'var(--text-primary)' }}>Social Robots</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'white' }}>Education</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--vanilla)', color: 'var(--text-primary)' }}>Learning</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--melon)', color: 'white' }}>Mixed Methods</span>
          </div>
          
          <div className="mt-3">
            <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Deliverables</p>
            <div className="space-y-2">
              <div>
            <a
              href="https://doi.org/10.1126/scirobotics.adu5257"
              className="hover:underline transition-colors"
              style={{ color: 'var(--title-melon-dark)' }}
              target="_blank"
            >
              📄 Observing a robot peer{"'"}s failures facilitates students{"'"} classroom learning - Science Robotics, {"'"}25
            </a>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Section: Others */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 pastel-title-primary">Others</h2>
        
        {/* University of Michigan - mHealth Interventions */}
        <div className="border rounded-lg shadow-sm p-6 mb-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="text-lg font-semibold mb-2">Graduate Student Research Assistant</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            University of Michigan, Ann Arbor | 2022–2024
          </p>
          <h4 className="font-semibold mb-3" style={{ color: 'var(--title-melon-dark)' }}>Designing mHealth Interventions</h4>
          
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Prototyped empathetic exercise coach chatbots (scripts + Figma) to study long-term user–chatbot relationships; conducted pilot studies (n=6) with surveys and interviews; analyzed data from Amazon Mechanical Turk to reveal user preferences.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Developed AI-driven Just-In-Time Adaptive Interventions (JITAI) using technology probes to promote physical activity.
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--melon)', color: 'white' }}>mHealth</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--icterine)', color: 'var(--text-primary)' }}>Chatbots</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'white' }}>JITAI</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--vanilla)', color: 'var(--text-primary)' }}>Physical Activity</span>
          </div>
        </div>

        {/* University of Michigan - AR/VR Experiences */}
        <div className="border rounded-lg shadow-sm p-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="text-lg font-semibold mb-2">Student Research Programme</h3>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            University of Michigan, Ann Arbor | 2022–2023
          </p>
          <h4 className="font-semibold mb-3" style={{ color: 'var(--title-melon-dark)' }}>Designing Creative AR/VR Experiences for Languages</h4>
          
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Designed 3D graphics for AR/VR environments on Meta Quest for the shape and flow of languages, prototyping and testing experiences using Unity and Unreal Engine.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              • Developed and deployed the final immersive environment via Mozilla Hubs.
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--lavender-blush)', color: 'var(--text-primary)' }}>AR/VR</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--melon)', color: 'white' }}>Unity</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--icterine)', color: 'var(--text-primary)' }}>Unreal Engine</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'white' }}>Languages</span>
            <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--vanilla)', color: 'var(--text-primary)' }}>3D Graphics</span>
          </div>
        </div>
      </section>
    </div>
  );
}
