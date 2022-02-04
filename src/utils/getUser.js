import { API_URL } from "../constants/API_URL";

export const getUser = (token) => {
  const URL = `${API_URL}/auth/user`;
  return fetch(URL, {
    method: "GET",
    mode: "cors",
    headers: {
      token: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.data) return data.data;
      else throw new Error();
    });
};
export const getProfileData = (token) => {
  return fetch(`${API_URL}/dashboard/profile`, {
    headers: {
      token: token,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.data) return response.data;
      else throw new Error();
    });
};
