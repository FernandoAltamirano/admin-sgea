import { BiDockTop } from "react-icons/bi";
import CardEvent from "./CardEvent";
import EmptyListComponent from "./EmptyListComponent";

export default function CardsList({ title, listEvents, location, loading }) {
  return (
    <div className="second_container">
      <div className="second_title">
        <h2>{title}</h2>
      </div>

      <div className="cardsevent_container">
        {loading ? (
          <p>loading...</p>
        ) : listEvents?.length > 0 ? (
          listEvents.map((event) => (
            <CardEvent key={event.id} {...event} location={location} />
          ))
        ) : (
          <EmptyListComponent
            message="No se encontraron eventos"
            linkMessage="Ir a mi perfil"
            to="/dashboard/profile"
            Icon={BiDockTop}
          />
        )}
      </div>
    </div>
  );
}
