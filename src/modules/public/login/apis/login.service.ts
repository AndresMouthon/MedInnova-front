import api from "../../../../config/axiosConfig";
import { ENDPOINTS } from "../../../../utils/models/rutas/endpoints.model";
import { IUsuarioLogin } from "../models/ILoginModelDB";

const URL = ENDPOINTS.LOGIN;

export async function iniciarSesion({ usuario }: { usuario: IUsuarioLogin }) {
    try {
        const res = await api.post(URL, usuario);
        return res.data;
    } catch (error) {
        throw error;
    }
}
