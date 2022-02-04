import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection";
import { getEventsDashboard as getEvents } from "../utils/getEvents";
import CardsWithInput from "../components/CardsWithInput";

function Events() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    document.body.classList.remove("overflow");
    // setLoading(true);
    getEvents()
      .then((data) => {
        console.log(data);
        setLoading(false);
        setEvents(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
      });
  }, []);

  return (
    <Layout>
      <TitleSection title="Eventos" />
      <div className="events_container container_radius">
        <CardsWithInput loading={loading} events={events} location={location} />
      </div>
    </Layout>
  );
}

export default Events;
