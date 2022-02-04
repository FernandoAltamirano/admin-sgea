import { API_URL } from "../constants/API_URL";

export default function getRequestsAdmin({ token }) {
  return fetch(`${API_URL}/dashboardAdmin/myrequests`, {
    headers: {
      token: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.data) return data.data;
      else throw new Error();
    });
}
