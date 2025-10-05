export default function CVPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Curriculum Vitae</h1>
      <p>You can download my CV below:</p>
      <a
        href="/files/ziqi-cv.pdf"
        className="mt-4 inline-block rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        Download CV (PDF)
      </a>
    </main>
  )
}
