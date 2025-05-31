import { IUsuarioLogin } from "./ILoginModelDB";

export interface IFormLoginProps {
    loading: boolean;
    usuario: IUsuarioLogin;
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
}