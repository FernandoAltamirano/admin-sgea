import { API_URL } from "../constants/API_URL";

export const acceptRequest = ({ token, observation, id }) => {
  return fetch(`${API_URL}/dashboardadmin/myrequests/details/approved/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ observaciones: observation }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) return data.message;
      else throw new Error();
    });
};

export const rejectRequest = ({ token, observation, id }) => {
  return fetch(`${API_URL}/dashboardadmin/myrequests/details/dismissed/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify({ observaciones: observation }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) return data.message;
      else throw new Error();
    });
};
