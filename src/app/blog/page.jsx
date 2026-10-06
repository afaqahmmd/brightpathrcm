import BlogCard from "@/components/BlogCard/BlogCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import Reveal from "@/components/Reveal/Reveal";
import { blogs } from "@/lib/DataStore";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/blog",
  title: "Blogs",
  description: "Articles on healthcare technology, billing and the business of running a practice.",
});

const Blog = () => {
  const sorted = [...blogs].sort((a, b) => b.date.localeCompare(a.date));
  const [lead, ...rest] = sorted;

  return (
    <>
      <PageHeader
        compact
        crumbs={[{ label: "Blogs" }]}
        eyebrow="Blogs"
        title="Notes on healthcare, technology and the revenue cycle."
      />

      <section className="section blog-index">
        <div className="container">
          <div className="blog-index__lead">
            <p className="eyebrow">Latest</p>
            <BlogCard blog={lead} featured />
          </div>

          <div className="blog-index__head">
            <h2 className="h3">All articles</h2>
            <span className="mono muted">{String(blogs.length).padStart(2, "0")}</span>
          </div>

          <div className="blog-index__grid">
            {rest.map((blog, i) => (
              <Reveal key={blog.id} delay={(i % 3) * 80}>
                <BlogCard blog={blog} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
