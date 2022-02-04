import { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import "./styles/Layout.css";
import { useHistory } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function Layout({ children }) {
  const history = useHistory();
  const [{ user }, _] = useUser();
  const [toggleShow, setToggleShow] = useState(false);

  const signOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className="Container-Layout">
      <Menu
        toggleShow={toggleShow}
        setToggleShow={setToggleShow}
        signOut={signOut}
        user={user}
      />
      <section className="home-section">
        <div>
          <Header signOut={signOut} user={user} />
        </div>
        <div className="content">{children}</div>
      </section>
    </div>
  );
}
