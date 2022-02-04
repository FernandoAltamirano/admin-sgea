import { FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";

import "./styles/Header.css";

function Header({ user }) {
  return (
    <header className="header_container">
      <div className="header">
        {!user?.foto ? (
          <FiUser className="icon user" />
        ) : (
          <img src={user.foto} alt="" className="profile" />
        )}
        <p className="username">
          {user ? `${user.nombres} ${user.apellidos}` : "Nombre completo"}
        </p>
        <Dropdown redirect={true} />
      </div>
    </header>
  );
}

export default Header;
