/** Renders schema.org structured data; `<` is escaped so content can't break out of the script tag. */
export default function JsonLd({ data }) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
      type="application/ld+json"
    />
  );
}
