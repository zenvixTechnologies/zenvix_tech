/**
 * Server-rendered word-by-word masked reveal for above-the-fold headings.
 * Same look as <SplitText>, but the entrance is CSS (.enter-word), so it plays
 * from the first paint instead of waiting for hydration.
 */
export default function EnterText({ as: Tag = "span", text, className = "", delay = 0, stagger = 0.06 }) {
  const words = text.split(" ");
  const isHeading = /^h[1-6]$/.test(Tag);

  // Headings are named with aria-label; other elements get a visually hidden copy.
  return (
    <Tag aria-label={isHeading ? text : undefined} className={className}>
      {!isHeading && <span className="sr-only">{text}</span>}
      {words.map((word, index) => (
        <span
          aria-hidden="true"
          className="-mb-[0.16em] inline-flex overflow-hidden pb-[0.16em] align-bottom"
          key={`${word}-${index}`}
        >
          <span className="enter-word inline-block" style={{ "--d": `${delay + index * stagger}s` }}>
            {word}
          </span>
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
