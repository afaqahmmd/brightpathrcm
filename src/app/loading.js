const Loading = () => {
  return (
    <div className="page-loading" role="status">
      <span className="spinner" aria-hidden="true" />
      <span className="page-loading__label mono">Loading…</span>
    </div>
  );
};

export default Loading;
