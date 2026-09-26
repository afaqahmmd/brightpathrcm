import Link from "next/link";

// Editorial header shared by inner pages.
const PageHeader = ({ eyebrow, title, intro, crumbs = [], aside, compact = false }) => {
  return (
    <section className={"page-header" + (compact ? " page-header--compact" : "")}>
      <div className="grid-lines" aria-hidden="true" />
      <div className="container page-header__inner">
        <div className="page-header__main">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="page-header__crumbs mono">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {crumbs.map((crumb) => (
                  <li key={crumb.label}>
                    {crumb.href ? (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-header__title">{title}</h1>
          {intro && <p className="lede page-header__intro">{intro}</p>}
        </div>
        {aside && <div className="page-header__aside">{aside}</div>}
      </div>
    </section>
  );
};

export default PageHeader;
