import axios from "axios";
import { convertToCamelCase } from "../utils/convert-keys";
import { useAuthStore } from "../modules/infrastructure/store/authStore";
export const API_URL = 'http://localhost:5170/api';

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
  // httpAxios.interceptors.request.use(
  //   (config) => {
      
  //     if (!config.url?.includes('/register') && !config.url?.includes('/login')) {
  //       const token = useAuthStore.getState().token;
  //       if (token) {
  //         config.headers.Authorization = `Bearer ${token}`;
  //       }
  //     }
  
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );