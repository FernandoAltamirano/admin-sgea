import { API_URL } from "../constants/API_URL";

export const getRequestDetails = ({ token, id }) => {
  return fetch(`${API_URL}/dashboard/myrequests/details/${id}`, {
    headers: {
      token: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) return data.data[0];
      else throw new Error();
    });
};
export const getRequestDetailsToAdmin = ({ token, id }) => {
  return fetch(`${API_URL}/dashboardadmin/myrequests/details/${id}`, {
    headers: {
      token: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) return data.data[0];
      else throw new Error();
    });
};
