import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import getEventDetails from "../utils/getEventDetails";
import TitleSection from "../components/TitleSection";
import DetailsEventComponent from "../components/DetailsEventComponent";
import { changeEventState } from "../utils/changeEventState";
import Button from "../components/Button";

export default function EventsDetails() {
  const params = useParams();
  const ht = useHistory();
  const [event, setEvent] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    getEventDetails({ id: params.id, token })
      .then((data) => {
        console.log(data);
        setEvent(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const changeStateOfEvent = () => {
    const token = localStorage.getItem("token");
    changeEventState({ id: params.id, token })
      .then((res) => {
        console.log(res);
        if (res.message === "Updated requet's status") {
          ht.push("/dashboard/events");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Layout>
      <TitleSection title={`${event?.titulo} / Detalles`} />
      <div className="container_details container_radius">
        <DetailsEventComponent event={event} />
        <div
          style={{
            width: "20%",
            margin: "2em 0 2em auto",
          }}
        >
          <Button
            functionToExecute={changeStateOfEvent}
            text="Revisar evento"
          />
        </div>
      </div>
    </Layout>
  );
}
