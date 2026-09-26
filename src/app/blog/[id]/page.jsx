import { notFound } from "next/navigation";
import Image from "next/image";
import parse from "html-react-parser";
import { blogs } from "@/lib/DataStore";
import { formatDate, readingTime } from "@/lib/blog";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogSideBar from "@/components/BlogSideBar/BlogSideBar";
import CTASection from "@/components/CTASection/CTASection";

const findBlog = (id) => blogs.find((blog) => id == blog.id);

export function generateStaticParams() {
  return blogs.map((blog) => ({ id: String(blog.id) }));
}

export function generateMetadata({ params }) {
  const blog = findBlog(params.id);
  if (!blog) return {};
  return { title: blog.title };
}

const page = ({ params }) => {
  const blog = findBlog(params.id);
  if (!blog) notFound();

  // Bodies open with an <h2> repeating the title, which the page header already shows.
  const body = blog.body.replace(/^\s*<h2>[\s\S]*?<\/h2>/, "");

  return (
    <>
      <PageHeader
        compact
        crumbs={[{ label: "Insights", href: "/blog" }, { label: "Article" }]}
        eyebrow={
          <>
            <time dateTime={blog.date}>{formatDate(blog.date)}</time> · {readingTime(blog.body)} min
            read
          </>
        }
        title={blog.title}
        intro={`By ${blog.author}`}
      />

      <section className="section article">
        <div className="container article__inner">
          <article className="article__main">
            <div className="article__media duotone">
              <Image src={blog.image} alt="" fill priority sizes="(min-width: 1120px) 760px, 100vw" />
            </div>
            <div className="prose">{parse(body)}</div>
          </article>
          <aside className="article__side">
            <BlogSideBar currentId={blog.id} />
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default page;
