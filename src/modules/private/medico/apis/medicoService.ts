import api from "../../../../config/axiosConfig";
import { ENDPOINTS } from "../../../../utils/models/rutas/endpoints.model";
import { IMedicoModelDB } from "../models/IMedicoModelDB";

const URL = ENDPOINTS.MEDICOS;

export async function createMedico(medico: IMedicoModelDB) {
    try {
        const res = await api.post(URL, medico);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getMedicos() {
    try {
        const res = await api.get(URL);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateMedico(medico: IMedicoModelDB) {
    try {
        const res = await api.put(`${URL}/${medico.id}`, medico);
        return res.data;
    } catch (error) {
        throw error;
    }
};