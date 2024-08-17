import axios from "axios";
import { convertToCamelCase } from "../utils/convert-keys";
export const API_URL = 'http://localhost:3000';

export const httpAxios = axios.create({
    baseURL: API_URL
  });
  httpAxios.interceptors.response.use(
    (response) => {
      // Convertir las claves de las respuestas a camelCase
      response.data = convertToCamelCase(response.data);
      return response;
    },
    (error) => {
      // Manejo de errores de respuesta
      return Promise.reject(error);
    }
  );