import { Link } from "react-router-dom";
import "./styles/CardEvent.css";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
export default function CardEvent({
  id,
  logo,
  titulo,
  fecha_inicio,
  hora_inicio,
  precio_inscripcion,
  location,
  personalEvents = false,
}) {
  return (
    <div className="single_card" key={id}>
      <div className="img_container">
        <img
          className="img_event"
          src={logo}
          // src="https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg"
          alt=""
        />
      </div>
      <div className="container_title">
        <p className="event_title">{titulo}</p>
      </div>
      <div className="date_content">
        <div>
          <AiOutlineCalendar size="15" color="var(--black)" />
          <p>{fecha_inicio}</p>
        </div>
        <div>
          <AiOutlineClockCircle size="15" color="var(--black)" />
          <p>{hora_inicio}</p>
        </div>
      </div>
      <div className="last_content">
        {!personalEvents && (
          <div className="pricechild">
            <p className="price">Precio:</p>
            <p className="amount">
              <b>
                {!precio_inscripcion ? (
                  "Gratis"
                ) : (
                  <span>S/ {precio_inscripcion}</span>
                )}
              </b>
            </p>
          </div>
        )}

        <Link className="button_price" to={`/dashboard/events/details/${id}`}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
