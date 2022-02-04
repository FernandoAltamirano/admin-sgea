import { Link, useHistory } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { useUser } from "../hooks/useUser";
import "./styles/Dropdown.css";

export default function Dropdown({ redirect = false }) {
  const [_, dispatch] = useUser();
  const history = useHistory();

  const updateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
  };
  const signOut = () => {
    localStorage.removeItem("token");
    updateUser(null);
    redirect && history.push("/");
  };

  return (
    <div>
      <label className="icon-dropdown">
        <input type="checkbox" id="input_check" hidden />
        <div>
          <BiChevronDown size="30" />
        </div>
        <div className="container-dropdown">
          <div className="corner"></div>
          <div className="item">
            <RiDashboardLine size="20" />
            <Link to="/dashboard/profile">Dashboard</Link>
          </div>
          <div className="item" onClick={signOut}>
            <FiLogOut size="20" />
            <p>Exit</p>
          </div>
        </div>
      </label>
    </div>
  );
}
