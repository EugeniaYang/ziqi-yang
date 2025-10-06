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
          <h1 className="text-4xl font-bold mb-3">Ziqi Yang</h1>
          <p className="text-lg mb-4">
            PhD Student in Informatics @ University of California, Irvine.
            Research in Human-Computer Interaction, Health Informatics, and
            Generative AI.
          </p>
          <div className="space-x-4">
            <Link href="/research" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"> */}
                Research
              {/* </button> */}
            </Link>
            <Link href="/internship">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Internship
              </button>
            </Link>
            <a
              href="/files/ziqi_cv.pdf" // 把 CV 放到 public/files/ziqi_cv.pdf
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                CV
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
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

      {/* Research Highlights Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Research Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Example Highlight Card */}
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
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
              <p className="text-sm text-gray-600 mb-2">IMWUT 2024</p>
              <div className="space-x-3">
                <a
                  href="https://doi.org/10.1145/3659625"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  [PDF]
                </a>
                <a
                  href="https://youtu.be/fMMDN7gZGjs"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  [Video]
                </a>
              </div>
            </div>
          </div>

          {/* Another Highlight */}
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <Image
              src="/projects/doctor-563428_1280.jpg"
              alt="RECOVER Project"
              width={400}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">
                RECOVER: LLM-based Remote Patient Monitoring System
              </h3>
              <p className="text-sm text-gray-600 mb-2">CHI’25 Submission</p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                [PDF]
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Selected Publications</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Talk2Care</strong>. Proc. ACM IMWUT 2024.{" "}
            <a
              href="https://doi.org/10.1145/3659625"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              [PDF]
            </a>
          </li>
          <li>
            Siyi Wu, Weidan Cao, Shihan Fu, Bingsheng Yao, <strong>Ziqi Yang</strong>, Changchang Yin, Varun Mishra, Daniel Addison, Ping Zhang, and Dakuo Wang. 2025. CardioAI: A Multimodal AI-based System to Support Symptom Monitoring and Risk Prediction of Cancer Treatment-Induced Cardiotoxicity. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI &apos;25). Association for Computing Machinery, New York, NY, USA, Article 313, 1–22. https://doi.org/10.1145/3706598.3714272 {" "}
            <a
              href="https://doi.org/10.1145/3706598.3714272"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              [PDF]
            </a>
          </li>
          <li>
            <strong>Robot Peer Failures</strong>. Science Robotics, 2025.{" "}
            <a
              href="https://doi.org/10.1126/scirobotics.adu5257"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              [PDF]
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t pt-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Ziqi Yang</p>
        <p>
          <a
            href="mailto:ziqiy30@uci.edu"
            className="text-blue-600 hover:underline"
          >
            ziqiy30@uci.edu
          </a>{" "}
          ·{" "}
          <a
            href="https://scholar.google.com/citations?user=IU7kufwAAAAJ"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Google Scholar
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/EugeniaYang"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}