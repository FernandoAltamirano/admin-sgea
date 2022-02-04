import { API_URL } from "../constants/API_URL";
import {} from "../constants/API_URL";
const token = localStorage.getItem("token");

export const getEventsHome = () => {
  return fetch(`${API_URL}/home`).then((res) => res.json());
};

export const getEventsDashboard = () => {
  console.log({ token });
  return fetch(`${API_URL}/dashboard/events`, {
    method: "GET",
    mode: "cors",
    headers: {
      token,
    },
  }).then((res) => res.json());
};

export const getMyEvents = () => {
  return fetch(`${API_URL}/dashboard/myevents`, {
    method: "GET",
    mode: "cors",
    headers: {
      token: token,
    },
  }).then((res) => res.json());
};
