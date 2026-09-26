import Image from "next/image";

const InfoCard = ({ info }) => {
  return (
    <div className="info-card">
      <div className="icon">{info.icon}</div>
      <div className="text">
        <span className="title">{info.title}</span>
        <span className="desc">{info.desc}</span>
      </div>
    </div>
  );
};

export default InfoCard;
