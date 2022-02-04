import { API_URL } from "../constants/API_URL";

export default function getEventDetails({ id, token }) {
  return fetch(`${API_URL}/dashboard/events/details/${id}`, {
    headers: {
      "Content-Type": "application/json",
      token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.event) return data.event[0];
      else throw new Error(data.message);
    });
}
