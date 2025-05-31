import axios from "axios";
import { URL_BACKEND } from "../utils/models/rutas/endpoints.model";

const api = axios.create({
    baseURL: `${URL_BACKEND}/api/`,
});

export default api; 