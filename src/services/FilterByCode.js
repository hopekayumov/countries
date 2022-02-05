import { BASE_URL } from "../constants/Api";

export const filterByCode = (codes) =>
  BASE_URL + "alpha?codes=" + codes.join(",");
