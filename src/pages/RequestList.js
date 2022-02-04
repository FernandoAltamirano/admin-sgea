import { useEffect, useState } from "react";
import "./styles/MyRequests.css";
import getRequestsAdmin from "../utils/getRequestsAdmin";
import RequestsListComponent from "../components/RequestsListComponent";
import Layout from "../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import TitleSection from "../components/TitleSection";

export default function RequestList() {
  const [requests, setRequests] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDataFilter(
      requests?.filter((item) => item.codigo.includes(String(search)))
    );
    return () => setDataFilter([]);
  }, [search, requests]);

  useEffect(() => {
    document.body.classList.remove("overflow");
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      console.log(token);
      getRequestsAdmin({ token })
        .then((data) => {
          console.log(data);
          setLoading(false);
          setRequests(data);
        })
        .catch((err) => setLoading(false));
    }
  }, []);

  return (
    <Layout>
      <TitleSection title="Solicitudes" />
      <div className="requests-container container_radius">
        <div className="requests__search-container">
          <div className="requests__search">
            <AiOutlineSearch className="icon-search" size="20" />
            <input
              type="text"
              placeholder="Nro Expediente"
              onChange={(ev) => setSearch(ev.target.value)}
            />
          </div>
        </div>
        <RequestsListComponent
          loading={loading}
          requests={dataFilter}
          isAdm={true}
        />
      </div>
    </Layout>
  );
}
