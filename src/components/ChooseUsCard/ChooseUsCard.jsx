const ChooseUsCard = ({ reason, index }) => {
  return (
    <li className="why-item">
      <span className="why-item__num mono">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="why-item__title">{reason.title}</h3>
      <p className="why-item__desc">{reason.desc}</p>
    </li>
  );
};

export default ChooseUsCard;
