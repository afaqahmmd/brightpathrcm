// Renders schema.org structured data. `data` may be one object or an array of them.
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    // Escape "<" so content can never close the script tag.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
  />
);

export default JsonLd;
