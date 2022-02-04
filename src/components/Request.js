import "./styles/Request.css";
import { Link } from "react-router-dom";

import { BsCalendar } from "react-icons/bs";
export default function Request({
  isAdm = false,
  codigo,
  estado,
  fecha_envio,
  id,
  titulo,
}) {
  return (
    <Link
      to={
        isAdm
          ? `/dashboard/requestslist/details/${id}`
          : `/dashboard/myrequests/details/${id}`
      }
    >
      <div className="request">
        <span>{codigo}</span>
        <h2>{titulo}</h2>
        <div className="request__date">
          <BsCalendar size="15" color="var(--black)" />
          <p>{fecha_envio}</p>
        </div>

        {!isAdm && (
          <>
            {estado === 1 && (
              <p className="request__state rejected">Rechazado</p>
            )}
            {estado === 2 && (
              <p className="request__state accepted">Aceptado</p>
            )}
            {estado === 3 && (
              <p className="request__state pending">Pendiente</p>
            )}
          </>
        )}
      </div>
    </Link>
  );
}
