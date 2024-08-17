import axios from "axios";
import { convertToCamelCase } from "../../utils/convert-keys";
export const API_URL = 'http://localhost:3000';
export const APISPORTS_URL = 'https://v3.football.api-sports.io/';

const API_KEY = '4ad557a127c711aad613e3f7e50478d0';
export const httpAxiosApiSports = axios.create({
    baseURL: APISPORTS_URL,
    headers: {
      'x-apisports-key': API_KEY
    }
  });
// Interceptor para añadir la clave de API a cada solicitud
httpAxiosApiSports.interceptors.request.use(
    (config) => {
      // Asegurarse de que se está utilizando el método GET
      if (config.method === 'get') {
        // Añadir el encabezado de autenticación
        config.headers['x-apisports-key'] = API_KEY;
      } else {
        throw new Error('Only GET requests are allowed');
      }
      return config;
    },
    (error) => {
      // Manejo de errores de solicitud
      return Promise.reject(error);
    }
  );
  httpAxiosApiSports.interceptors.response.use(
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