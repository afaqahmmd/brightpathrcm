const Loading = () => {
  return (
    <div className="loading-state" role="status">
      <span className="loading-state__bar" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default Loading;
