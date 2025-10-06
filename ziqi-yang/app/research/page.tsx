import Image from "next/image";

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Research</h1>

      {/* Section: Family Genetic Health */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Family Genetic Health</h2>
        <div className="grid md:grid-cols-1 gap-6">

          


        </div>
      </section>

      {/* Section: LLM for Healthcare Communication */}
      <section className="mb-16">
        
        <h2 className="text-2xl font-semibold mb-6">LLM for Healthcare Communication</h2>
        {/* Repeat paper cards */}
        <div className="border rounded-lg shadow hover:shadow-lg transition p-6 background-color">
        <h3 className="text-lg font-semibold mb-2">
              Talk2Care: LLM Voice Assistant for Patient–Provider Communication
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Ziqi Yang, et al. IMWUT 2024
            </p>

            {/* Keyword tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">LLM</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Healthcare</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Voice UI</span>
            </div>

            {/* Teaser */}
            <p className="text-gray-800 text-sm mb-2">
              A voice-based assistant leveraging large language models to improve patient–provider communication in genetic counseling.
            </p>

            {/* Abstract */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-4">
              We present Talk2Care, a system that explores the feasibility of integrating LLMs into patient–provider communication for family genetic health contexts...
            </p>

            {/* Links */}
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
      </section>

      {/* Section: Others */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Others</h2>
        {/* Repeat paper cards */}
      </section>
    </div>
  );
}
