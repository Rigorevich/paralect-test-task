import Cookies from "js-cookie";
import {
  VACANCIES_URL,
  CATALOG_URL,
  X_SECRET_KEY,
  X_API_APP_ID,
  AUTH_URL,
  AUTH_PARAMS,
} from "../constants";

export const getAccessToken = async () => {
  const res = await fetch(`${AUTH_URL}?${new URLSearchParams(AUTH_PARAMS)}`, {
    method: "GET",
    headers: {
      "X-Api-App-Id": X_API_APP_ID,
      "x-secret-key": X_SECRET_KEY,
    },
  });
  const data = await res.json();

  const expires = new Date(new Date().getTime() + data.expires_in);
  Cookies.set("access_token", data.access_token, { expires });
  return await data.access_token;
};

export const getVacancies = async (params) => {
  const accessToken = Cookies.get("access_token")
    ? Cookies.get("access_token")
    : await getAccessToken();

  const res = await fetch(`${VACANCIES_URL}?${new URLSearchParams(params)}`, {
    method: "GET",
    headers: {
      "X-Api-App-Id": X_API_APP_ID,
      "x-secret-key": X_SECRET_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await res.json();
};

export const getCatalogs = async () => {
  const res = await fetch(CATALOG_URL, {
    method: "GET",
    headers: {
      "x-secret-key": X_SECRET_KEY,
    },
  });
  return await res.json();
};
