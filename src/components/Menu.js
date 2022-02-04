import "./styles/Menu.css";
import logo from "../images/logo 2.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt, FaCalendarAlt, FaEdit } from "react-icons/fa";
import { RiCalendarCheckFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { Link } from "react-router-dom";
function Menu({ toggleShow, setToggleShow, user }) {
  return (
    <div className={toggleShow ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={toggleShow ? "logo" : "logo hidden"}
          />
        </Link>
        <AiOutlineMenu
          color="white"
          size="25"
          id="btn"
          onClick={() => setToggleShow(!toggleShow)}
        />
      </div>
      <ul className="nav-list">
        <li>
          <Link to={`/dashboard/profile`}>
            <i>
              <FaUserAlt />
            </i>
            <span className="links_name">Mi perfil</span>
          </Link>
          <span className="tooltip">Mi perfil</span>
        </li>
        <li>
          <Link to="/dashboard/events">
            <i>
              <FaCalendarAlt />
            </i>
            <span className="links_name">Eventos Disponibles</span>
          </Link>
          <span className="tooltip">Eventos</span>
        </li>
        <li>
          <Link to="/dashboard/requestslist">
            <i>
              <IoDocumentText />
            </i>
            <span className="links_name">Solicitudes</span>
          </Link>
          <span className="tooltip">Solicitudes</span>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
