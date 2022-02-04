import { API_URL } from "../constants/API_URL";

export const login = (email, password) => {
  const data = {
    email,
    password,
  };
  const URL = `${API_URL}/auth/login`;
  return fetch(URL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.user !== undefined) return data;
      else throw new Error(data.message);
    });
};
