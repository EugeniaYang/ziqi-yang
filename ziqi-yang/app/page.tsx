import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center">
      {/* Hero */}
      <img
        src="/images/avatar.jpg"
        alt="Ziqi Yang"
        className="mx-auto mb-6 h-40 w-40 rounded-full border"
      />
      <h1 className="text-4xl font-bold mb-3">Hi, I’m Ziqi Yang</h1>
      <p className="text-lg text-gray-700 mb-6">
        PhD in Informatics (HCI & AI/UX Research).<br />
        I design and study interactive systems bridging <b>human–AI interaction</b> and <b>user-centered design</b>.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="/research"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Research
        </a>
        <a
          href="/internship"
          className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          Internship
        </a>
        <a
          href="/files/ziqi-cv.pdf"
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          CV
        </a>
      </div>
    </main>
  );
}
