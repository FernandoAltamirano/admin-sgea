import "./styles/DetailsEvent.css";
export default function DetailsEventComponent({ event }) {
  return (
    <div className="details_event">
      <img className="logo" src={event?.logo} alt="logo" />
      <div className="flex">
        <div className="principal">
          <div className="content">
            <h2>{event?.titulo}</h2>
            <p className="header_description">Description</p>
            <p>{event?.descripcion_evento}</p>
          </div>
        </div>
        <div className="details_event_right">
          <div className="content">
            <div className="date">
              <h3>Fecha</h3>
              <p>{event?.fecha_inicio}</p>
            </div>
            <div className="hour">
              <h3>Horario</h3>
              <p>{event?.hora_inicio}</p>
            </div>
            <div className="certficate">
              <h3>Certificado</h3>
              <p>{event?.tipo_certificado}</p>
            </div>
            <div className="tickets">
              <h3>Entradas (c/u)</h3>
              <p className="amount">
                <>
                  {" "}
                  {!event?.precio_inscripcion ? (
                    "Gratis"
                  ) : (
                    <span>S/ {event?.precio_inscripcion}</span>
                  )}
                </>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="more_information_title">Más información</h4>
      <div className="content more_information">
        <h3>Ambiente</h3>
        <p>{event?.tipo_ambiente}</p>
      </div>
      <div className="more_information_coordinator">
        <div className="content">
          <h3>Coordinador</h3>
          <p>{event?.nombre_coordinador}</p>
        </div>
      </div>
    </div>
  );
}
