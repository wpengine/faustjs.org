export default function DocPageContent({ doc }) {
  const { title, content } = doc;

  return (
    <article class="prose prose-invert">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
