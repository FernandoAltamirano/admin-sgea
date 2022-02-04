import { Link } from "react-router-dom";
import logo from "../images/logo 2.png";
import "./styles/HeaderHome.css";
import { BiUserCircle } from "react-icons/bi";
import { useUser } from "../hooks/useUser";
import Dropdown from "./Dropdown";

function HeaderHome() {
  const [{ user }, _] = useUser();
  return (
    <div>
      <nav className="nav_container">
        <div className="nav_logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo_img" />
          </Link>
        </div>
        <div className="nav_links">
          {!user ? (
            <Link className="btn_link" to="/">
              Iniciar Sesión
            </Link>
          ) : (
            <div className="usernameactive">
              <Link to="/dashboard/profile">
                {!user.foto ? (
                  <BiUserCircle color="white" size="40" />
                ) : (
                  <img src={user.foto} className="image-profile" alt="" />
                )}
                <p className="username">{`${user.nombre} ${user.apellidos}`}</p>
              </Link>
              <Dropdown />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default HeaderHome;
