import "./styles/FooterHome.css";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Icon from "./Icon";
function FooterHome() {
  return (
    <div className="footer">
      <footer>
        <form>
          <h2>Contáctanos</h2>
          <input type="email" />
          <button className="btn_session">Contáctame</button>
        </form>
        <div className="footer_social">
          <Icon
            Element={FaLinkedinIn}
            link="https://www.linkedin.com/in/fernandoelialtamirano/"
          />
          <Icon Element={FaWhatsapp} link="https://wa.me/+51986175271" />
          <Icon
            Element={FaInstagram}
            link="https://www.instagram.com/fernando_altamiran0/"
          />
        </div>
      </footer>
      <div className="text_copy">
        <p>Mejorado por</p>
        <a
          href="https://fernando-xi.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          <strong>Fernando Altamirano - 2021</strong>
        </a>
      </div>
    </div>
  );
}

export default FooterHome;
