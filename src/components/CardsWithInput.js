import CardsList from "../components/CardsList";
import "./styles/CardsWithInput.css";
export default function CardsWithInput({ events, location, loading }) {
  return (
    <CardsList
      loading={loading}
      title="Eventos disponibles"
      listEvents={events}
      location={location}
    />
  );
}
