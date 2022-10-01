import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const getVehicles = () => {
  return axios.get(`${API_URL}/car/visitors/all`);
};

export const getVehicle = (id) => {
  return axios.get(`${API_URL}/car/visitors/${id}`);
};

export const getVehiclesByPage = (
  page = 0,
  size = 10,
  sort = "model",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/car/visitors/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`
  );
};

export const getVehicleImage = (id) => {
  if (Array.isArray(id)) id = id[0];
  return axios.get(`${settings.apiURL}/files/display/${id}`, {
    responseType: "arraybuffer",
  });
};

/* ADMIN SERVICES */

export const downloadVehicles = () => {
  return axios.get(`${API_URL}/excel/download/cars`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: "blob",
  });
};
