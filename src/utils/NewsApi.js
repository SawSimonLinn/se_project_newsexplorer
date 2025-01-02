export const APIkey = "0dce0737355a46c28c1d4c9dc4852bcc";

export const BASE_URL = "http:localhost:3000/news";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};
