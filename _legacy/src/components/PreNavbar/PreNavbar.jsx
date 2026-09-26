import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const PreNavbar = () => {
  return (
    <div className="pre-navbar-wrapper">
      <div className="pre-navbar-container">
        <p>
          <FaEnvelope />
          <a href="mailto:info@advancedrcmsolution.com" target="_blank">
            info@advancedrcmsolution.com
          </a>
        </p>

        <p>
          <FaPhoneAlt />
          <a href="tel: +1 (406) 497-0497" target="_blank">
            +1 406-497-0497
          </a>
        </p>
        <p>
          <FaMapMarkerAlt />
          <a
            href="https://www.google.com/maps/place/1001+S+Main+St+%23500,+Kalispell,+MT+59901/@48.1888896,-114.3124046,17z/data=!3m1!4b1!4m6!3m5!1s0x536650c2d7e25017:0x2306ba598ba234da!8m2!3d48.1888861!4d-114.3098297!16s%2Fg%2F11mhk0p7_f?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            {" "}
            1001 S Main St STE 500, Kalispell, MT 59901-1498
          </a>
        </p>
      </div>
    </div>
  );
};

export default PreNavbar;
