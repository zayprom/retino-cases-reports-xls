import { API_CONFIG } from "../config/constants";
import { type ResponseType } from "../types";

export const fetchTickets: ResponseType = await fetch(API_CONFIG.BASE_URL, {
  method: "GET",
  headers: {
    Authorization: `Token ${API_CONFIG.TOKEN_KEY}`,
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.error(error));
