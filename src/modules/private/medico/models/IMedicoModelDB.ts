import { IUsuarioModelDB } from "../../../../utils/models/interface/IUsuarioModel";

export interface IMedicoModelDB {
    id?: number;
    especialidad: string;
    numero_colegiatura: string;
    telefono: string;
    disponibilidad?: boolean;
    horario_atencion: string;
    usuario_id: IUsuarioModelDB;
};