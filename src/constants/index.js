export const URL = "https://startup-summer-2023-proxy.onrender.com/2.0/";
export const X_API_APP_ID =
  "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";
export const AUTH_URL =
  URL +
  "oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2231&client_secret=" +
  X_API_APP_ID;
export const VACANCIES_URL = URL + "vacancies/";
export const CATALOG_URL = URL + "catalogues/";
export const X_SECRET_KEY = "GEU4nvd3rej*jeh.eqp";

export const AUTH_PARAMS = {
  login: "sergei.stralenia@gmail.com",
  password: "paralect123",
  client_id: "2356",
  client_secret: X_API_APP_ID,
  hr: 0,
};

export const options = {
  headers: {
    "X-Api-App-Id": X_API_APP_ID,
    "x-secret-key": X_SECRET_KEY,
  },
};
