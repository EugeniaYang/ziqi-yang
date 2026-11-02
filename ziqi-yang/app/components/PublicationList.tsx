import { publications } from "../data/publications";

export default function PublicationList({ ids }: { ids?: string[] }) {
  const items = ids
    ? ids.map((id) => publications.find((paper) => paper.id === id)!)
    : publications;

  return (
    <ul className="space-y-6">
      {items.map((paper) => (
        <li key={paper.id} className="border-l-4 border-[var(--tea-rose-red)] pl-4">
          <p className="font-semibold leading-relaxed">{paper.title}</p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {paper.authors.split("Ziqi Yang").map((part, index) => (
              <span key={index}>
                {index > 0 && <strong className="underline underline-offset-2">Ziqi Yang</strong>}
                {part}
              </span>
            ))}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="research-tag">{paper.venue}</span>
            {paper.note && <span className="text-xs font-medium">{paper.note}</span>}
            {paper.doi && <a className="text-link" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" aria-label={`DOI for ${paper.title}`}>DOI ↗</a>}
            {paper.pdf && <a className="text-link" href={paper.pdf} target="_blank" rel="noopener noreferrer" aria-label={`PDF of ${paper.title}`}>PDF ↗</a>}
          </div>
        </li>
      ))}
    </ul>
  );
}
