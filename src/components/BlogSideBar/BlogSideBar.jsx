import Link from "next/link";
import { blogs } from "@/lib/DataStore";
import { formatDate } from "@/lib/blog";

// Shows the next few articles after the current one (wrapping around), so the list is
// stable between server and client render.
const BlogSideBar = ({ currentId, count = 5 }) => {
  const start = blogs.findIndex((blog) => blog.id === currentId);
  const others = Array.from({ length: Math.min(count, blogs.length - 1) }, (_, i) => {
    return blogs[(start + 1 + i) % blogs.length];
  });

  return (
    <nav className="blog-sidebar" aria-label="More articles">
      <p className="blog-sidebar__label mono">More articles</p>
      <ul>
        {others.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`} className="blog-sidebar__link">
              <time className="mono" dateTime={blog.date}>
                {formatDate(blog.date)}
              </time>
              <span>{blog.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogSideBar;
