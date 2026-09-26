import Image from "next/image";
import Link from "next/link";
import { formatDate, readingTime } from "@/lib/blog";

const BlogCard = ({ blog, featured = false }) => {
  return (
    <article className={"blog-card" + (featured ? " blog-card--featured" : "")}>
      <Link href={`/blog/${blog.id}`} className="blog-card__link">
        <div className="blog-card__media duotone">
          <Image
            src={blog.image}
            alt=""
            fill
            priority={featured}
            sizes={featured ? "(min-width: 900px) 60vw, 100vw" : "(min-width: 900px) 33vw, 100vw"}
          />
        </div>
        <div className="blog-card__body">
          <p className="blog-card__meta mono">
            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTime(blog.body)} min read</span>
          </p>
          <h2 className="blog-card__title">{blog.title}</h2>
          {featured && <span className="link-arrow">Read the article</span>}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
