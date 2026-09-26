const ValueCard = ({ value }) => {
  return (
    <li className="value-card">
      <span className="value-card__num mono">{String(value.id).padStart(2, "0")}</span>
      <h3 className="value-card__title">{value.title}</h3>
      <p className="value-card__text">{value.value}</p>
    </li>
  );
};

export default ValueCard;
