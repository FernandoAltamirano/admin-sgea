import { Link } from "react-router-dom";
import "./styles/EmpyListComponent.css";
export default function EmptyListComponent({
  Icon,
  message,
  linkMessage = "",
  to = "",
}) {
  return (
    <div className="emptylist">
      <div className="header_emptylist">
        <Icon size="30" color="var(--black)" />
        <h3>{message}</h3>
      </div>
      <Link to={to}>{linkMessage}</Link>
    </div>
  );
}
