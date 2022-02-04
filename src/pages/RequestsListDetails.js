import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getRequestDetailsToAdmin } from "../utils/handleRequestDetails";
import { acceptRequest, rejectRequest } from "../utils/handleRequest";
import RequestDetailsComponent from "../components/RequestDetailsComponent";
import TitleSection from "../components/TitleSection";
import Layout from "../components/Layout";
import Button from "../components/Button";
import "./styles/RequestsDetails.css";

export default function RequestsListDetails() {
  const params = useParams();
  const observationRef = useRef(null);
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.body.classList.remove("overflow");
    const token = localStorage.getItem("token");
    if (token)
      getRequestDetailsToAdmin({ token, id: params.id })
        .then((data) => setRequest(data))
        .catch((err) => console.error(err));
  }, []);

  const handleAcceptRequest = () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    token &&
      acceptRequest({
        token,
        id: params.id,
        observation: observationRef.current.value,
      })
        .then(() => history.push("/dashboard/requestslist"))
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
  };

  const handleRejectRequest = () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    token &&
      rejectRequest({
        token,
        id: params.id,
        observation: observationRef.current.value,
      })
        .then(() => history.push("/dashboard/requestslist"))
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
  };
  return (
    <Layout>
      <TitleSection title="Solicitudes / Detalles" />
      <div className="requests-details-container container_radius">
        <div className="request_title">
          <h2>{request?.titulo}</h2>
        </div>
        <RequestDetailsComponent request={request} />
        <textarea ref={observationRef}></textarea>
        <div className="requests-list-details__buttons">
          <Button
            text="Aceptar solicitud"
            loading={loading}
            functionToExecute={handleAcceptRequest}
          />
          <Button
            text="Rechazar solicitud"
            loading={loading}
            functionToExecute={handleRejectRequest}
          />
        </div>
      </div>
    </Layout>
  );
}
