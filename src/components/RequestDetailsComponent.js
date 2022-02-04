import "./styles/RequestDetailsComponent.css";
export default function RequestDetailsComponent({ request }) {
  return (
    <div className="request_content">
      <div className="main_content">
        <div className="left">
          <div className="row">
            <div className="request_element">
              <h4>Nro Expediente </h4>
              <p>{request?.codigo}</p>
            </div>
            <div className="request_element">
              <h4>Fecha de Registro </h4>
              <p>{request?.fecha_envio}</p>
            </div>
          </div>
          <div className="request_element">
            <h4>Tipo de coordinador </h4>
            <p>{request?.tipo_coordinador}</p>
          </div>
          <div className="request_element">
            <h4>Nombre del coordinador </h4>
            <p>{request?.nombre_coordinador}</p>
          </div>
          <div className="row">
            <div className="request_element">
              <h4>Fecha de inicio </h4>
              <p>{request?.fecha_inicio}</p>
            </div>
            <div className="request_element">
              <h4>Fecha de fin </h4>
              <p>{request?.fecha_fin}</p>
            </div>
          </div>
          <div className="row">
            <div className="request_element">
              <h4>Hora de inicio </h4>
              <p>{request?.hora_inicio}</p>
            </div>
            <div className="request_element">
              <h4>Duración </h4>
              <p>{request?.duracion} horas</p>
            </div>
          </div>
          <div className="request_element">
            <h4>Tipo de evento </h4>
            <p>{request?.tipo_evento}</p>
          </div>
        </div>
        <div className="request_logo">
          <img
            className="logo"
            src={request?.logo}
            // src="https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg"
            alt="Logo de evento"
          />
          <p>Logo del evento</p>
        </div>
      </div>
      <div className="request_element">
        <h4>Descripción </h4>
        <p style={{ textAlign: "justify" }}>{request?.descripcion}</p>
      </div>

      <div className="request_element">
        <h4>Tipo de Inscripción </h4>
        <p>{request?.tipo_inscripcion}</p>
      </div>
      <div className="request_element">
        <h4>Tipo de Certificado </h4>
        <p>{request?.tipo_certificado}</p>
      </div>
      <div className="request_element">
        <h4>Ambiente </h4>
        <p>{request?.tipo_ambiente}</p>
      </div>
      <div className="request_element">
        <h4>Número de Participantes </h4>
        <p>{request?.participantes}</p>
      </div>
      <div className="request_element">
        <h4>Observaciones </h4>
        <p>{request?.observaciones}</p>
      </div>
    </div>
  );
}
