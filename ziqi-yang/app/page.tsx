import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <Image
            src="/profile-portugal.png" // 替换成你的头像路径 (放在 public/avatar.jpg)
            alt="Ziqi Yang"
            width={180}
            height={180}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3 pastel-title-primary">Ziqi Yang</h1>
          <p className="text-lg mb-4">
            PhD Student in Informatics @ University of California, Irvine.
            Research in Human-Computer Interaction, Health Informatics, and
            Generative AI.
          </p>
          <div className="space-x-4">
            <Link href="/research" className="px-4 py-2 rounded-lg transition-colors pastel-button-primary hover:shadow-lg" style={{ color: 'text-primary' }}>
                Research
            </Link>
            <Link href="/ux-projects">
              <button className="px-4 py-2 rounded-lg transition-colors pastel-button-primary hover:shadow-lg" style={{ color: 'text-primary' }}>
                Design / UX Projects
              </button>
            </Link>
            <a
              href="/files/ziqi_cv.pdf" // 把 CV 放到 public/files/ziqi_cv.pdf
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 rounded-lg transition-colors pastel-button-primary hover:shadow-lg" style={{ color: 'text-primary' }}>
                CV
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 pastel-title-secondary">About Me</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          I am a PhD student at UCI co-advised by Prof. Yunan Chen and Prof. Daniel
          Epstein. My research interests lie in human-computer interaction and
          personal health informatics. Previously, I received my MS in
          Information Science at the University of Michigan, and my BS in
          Electrical and Computer Engineering at Shanghai Jiao Tong University.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Outside of research, I enjoy travelling, photography, and exploring
          new sports. I’m always happy to meet new ideas, opportunities, and
          collaborators!
        </p>
      </section>

      {/* News Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 pastel-title-accent">News</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <span className="inline-block px-2 py-0.5 mr-2 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
              2026.03
            </span>
            My CHI&apos;26 paper on sharing women&apos;s genetic health experiences is officially accepted! I will be presenting it at CHI 2026 in April in Barcelona, Spain.
          </li>
          <li>
            <span className="inline-block px-2 py-0.5 mr-2 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
              2026
            </span>
            CSCW&apos;26 paper on RECOVER, an LLM-based remote patient monitoring system for GI cancer care, accepted to PACMHCI&apos;26! I will be presenting it at CSCW 2026.
          </li>
          <li>
            <span className="inline-block px-2 py-0.5 mr-2 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
              2025
            </span>
            Science Robotics paper on learning with a robot peer accepted!
          </li>
          <li>
            <span className="inline-block px-2 py-0.5 mr-2 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
              2025.10
            </span>
            Talk2Care IMWUT&apos;24 paper received a Distinguished Paper Award : ) It was a great honor to be recognized for our work on improving patient-provider communication with AI.
          </li>
        </ul>
      </section>

      {/* Research Highlights Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pastel-title-accent">Research Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Genetic Health Research Highlight */}
          <div className="border rounded-lg overflow-hidden ">
            <div className="p-6" style={{ backgroundColor: 'var(--lavender-blush)' }}>
              <Image
                src="/projects/family-tree-annotate-final.svg"
                alt="Family Tree for Genetic Health"
                width={600}
                height={400}
                className="object-contain mx-auto"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                Sharing Women{"'"}s Health Experiences Influenced by Genetic Factors
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                CHI 26 Submission | University of California, Irvine
              </p>
              <p className="text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                Conducted a mixed-method survey with 249 U.S. women to study inter-generational sharing of genetic health experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--lavender-blush)', color: 'black' }}>Women&apos;s Health</span>
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'black' }}>Genetic Factors</span>
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--vanilla)', color: 'black' }}>HCI</span>
              </div>
              <div className="mt-3">
                <a
                  href="/research#family-genetic-health"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:shadow-lg"
                  style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Talk2Care Highlight */}
          <div className="border rounded-lg overflow-hidden ">
            <Image
              src="/projects/talk2care.png"
              alt="Talk2Care"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                Talk2Care: LLM Voice Assistant for Patient-Provider
                Communication
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                IMWUT 2024 [Distinguished Paper Award]
              </p>
              <p className="text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                Exploring a voice-based assistant leveraging large language models to improve patient–provider communication in healthcare contexts.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--melon)', color: 'black' }}>LLM</span>
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--icterine)', color: 'black' }}>Voice Assistant</span>
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--tea-rose-red)', color: 'black' }}>Healthcare</span>
              </div>
              <div className="mt-3 mb-3">
                <a
                  href="/research#llm-healthcare"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:shadow-lg"
                  style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}
                >
                  Learn More →
                </a>
              </div>
              <div className="space-x-3">
                <a
                  href="https://doi.org/10.1145/3659625"
                  className="hover:underline transition-colors pastel-title-primary"
                  target="_blank"
                >
                  [PDF]
                </a>
                <a
                  href="https://youtu.be/fMMDN7gZGjs"
                  className="hover:underline transition-colors pastel-title-primary"
                  target="_blank"
                >
                  [Video]
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    {/* UX Research & Design Highlights Section */}
<section className="mb-16">
  <h2 className="text-2xl font-bold mb-6 pastel-title-yellow">UX Research &amp; Design Highlights</h2>
  <div className="grid md:grid-cols-2 gap-6">

    {/* Big Data Hub Project */}
    <a href="https://ziqi-yang.notion.site/Big-Data-Hub-PM-Design-2859ea4a2d0080e2bd0fda685aa731f7" className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="/projects/big-data-hub.png" // placeholder, put actual preview later
        alt="Big Data Hub"
        width={600}
        height={400}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          Understanding Professionals to Design Data Pipelines for eBay Big Data Hub
        </h3>
        <p className="text-sm text-gray-600 mb-2">User Research, Product Management, UX Design</p>
        {/* <a
          href="https://ziqi-yang.notion.site/Big-Data-Hub-PM-Design-158c4c00f2ad4c3e82e0680dd2231cf5"
          className="hover:underline transition-colors pastel-title-primary"
        >
          [Showcase]
        </a> */}
      </div>
    </a>

    {/* MyVoice Website Optimization */}
    <a href="https://ziqis-portfolio.webflow.io/work/myvoice" className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src="/projects/myvoice.png" // placeholder, replace with actual screenshot
        alt="MyVoice Website Optimization"
        width={600}
        height={400}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          Understanding Multiple Stakeholders for a Youth-centered Website
        </h3>
        <p className="text-sm text-gray-600 mb-2">User Research, UX Design</p>
         
      </div>
    </a>

  </div>
</section>

      {/* Selected Publications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pastel-title-lavender">Selected Publications</h2>
        <ul className="space-y-4" style={{ color: 'var(--text-primary)' }}>
          <li>
            <div className="border-l-4 pl-4" style={{ borderColor: 'var(--melon)' }}>
              <p className="font-semibold">
                Sharing Women&apos;s Health Experiences Influenced by Genetic Factors: Practices, Challenges, and Opportunities
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong><u>Ziqi Yang</u></strong>, Daniel Epstein, Yunan Chen.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
                  CHI{"'"}26
                </span>
              </div>
            </div>
          </li>
          
          <li>
            <div className="border-l-4 pl-4" style={{ borderColor: 'var(--vanilla)' }}>
              <p className="font-semibold">
                RECOVER: Designing a Large Language Model-based Remote Patient Monitoring System for Postoperative GI Cancer Care
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong><u>Ziqi Yang</u></strong>, Yuxuan Lu, Jennifer Bagdasarian, Vedant Das Swain, Ritu Agarwal,
                Collin Campbell, Waddah Al-Refaire, Jehan El-Bayoumi, Guodong Gao, Nawar Shara, Dakuo Wang, Bingsheng Yao.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
                  CSCW{"'"}26 / PACMHCI{"'"}26 (to appear)
                </span>
              </div>
            </div>
          </li>
          
          <li>
            <div className="border-l-4 pl-4" style={{ borderColor: 'var(--tea-rose-red)' }}>
              <p className="font-semibold">
                Talk2Care: An LLM-based Voice Assistant for Communication between Healthcare Providers and Older Adults{" "}
                <a
                  href="https://doi.org/10.1145/3659625"
                  target="_blank"
                  className="hover:underline transition-colors pastel-link-primary"
                >
                  [PDF]
                </a>
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong><u>Ziqi Yang</u></strong>, Xuhai Xu, Bingsheng Yao, Ethan Rogers, Shao Zhang, Stephen Intille, Nawar Shara, Guodong Gordon Gao, and Dakuo Wang.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
                  IMWUT{"'"}24
                </span>
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--icterine)' }}>
                  ⭐ Distinguished Paper Award
                </span>
              </div>
            </div>
          </li>

          <li>
            <div className="border-l-4 pl-4" style={{ borderColor: 'var(--vanilla)' }}>
              <p className="font-semibold">
                CardioAI: A Multimodal AI-based System to Support Symptom Monitoring and Risk Prediction of Cancer Treatment-Induced Cardiotoxicity{" "}
                <a
                  href="https://doi.org/10.1145/3706598.3714272"
                  target="_blank"
                  className="hover:underline transition-colors pastel-link-primary"
                >
                  [PDF]
                </a>
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Siyi Wu, Weidan Cao, Shihan Fu, Bingsheng Yao, <strong><u>Ziqi Yang</u></strong>, Changchang Yin, Varun Mishra, Daniel Addison, Ping Zhang, and Dakuo Wang.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
                  CHI {"'"}25
                </span>
              </div>
            </div>
          </li>
          
          <li>
            <div className="border-l-4 pl-4" style={{ borderColor: 'var(--tea-rose-red)' }}>
              <p className="font-semibold">Observing a robot peer{"'"}s failures facilitates students{"'"} classroom learning{" "}
                <a
                href="https://doi.org/10.1126/scirobotics.adu5257"
                target="_blank"
                className="hover:underline transition-colors pastel-link-primary"
              >
                [PDF]
              </a></p> 
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Liuqing Chen, Yu Cai, Yuyang Fang, <strong><u>Ziqi Yang</u></strong>, Duowei Xia, Jiaxiang You, Shuhong Xiao, Yaxuan Song, Lingwei Zhan, Juanjuan Chen, and Lingyun Sun.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--title-melon-dark)', color: 'white' }}>
                  Science Robotics, 2025
                </span>
              </div>
              
            </div>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t pt-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Ziqi Yang</p>
        <p>
          <a
            href="mailto:ziqiy30@uci.edu"
            className="hover:underline transition-colors pastel-title-primary"
          >
            ziqiy30@uci.edu
          </a>{" "}
          ·{" "}
          <a
            href="https://scholar.google.com/citations?user=mOC0708AAAAJ&hl=en&oi=ao"
            className="hover:underline transition-colors pastel-title-primary"
            target="_blank"
          >
            Google Scholar
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/EugeniaYang"
            className="hover:underline transition-colors pastel-title-primary"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}