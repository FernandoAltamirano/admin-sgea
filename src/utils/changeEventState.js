import { API_URL } from "../constants/API_URL";

export const changeEventState = ({ id, token }) => {
  return fetch(`${API_URL}/dashboardadmin/events/${id}`, {
    method: "PUT",
    headers: {
      token,
    },
  }).then((res) => res.json());
};
