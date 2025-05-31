import { ChangeEvent } from "react";
import { IMedicoModelDB } from "./IMedicoModelDB";

export interface IFormComponentProps {
    medico: IMedicoModelDB;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface MedicoColumnsProps {
    capturarInformacionMedico: (medico: IMedicoModelDB) => void;
    deleteMedico: (medico: IMedicoModelDB) => void;
}