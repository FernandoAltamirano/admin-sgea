import Request from "../components/Request";
import { GrDocumentText } from "react-icons/gr";
import EmptyListComponent from "./EmptyListComponent";

export default function RequestsListComponent({ loading, requests, isAdm }) {
  if (loading) return <p>loading...</p>;
  return (
    <>
      <div className="myrequest__list">
        {requests?.length > 0 ? (
          requests.map((request) => (
            <Request key={request.id} isAdm={isAdm} {...request} />
          ))
        ) : (
          <EmptyListComponent
            Icon={GrDocumentText}
            message="No se encontraron nuevas solicitudes"
            linkMessage="Ir a mi perfil"
            to="/dashboard/profile"
          />
        )}
      </div>
    </>
  );
}
