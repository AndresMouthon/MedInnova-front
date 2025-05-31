import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { HelpRoutes } from "../models/RoutesModel";

const prohibido = <Navigate replace to={HelpRoutes.PAGE403} />;

export const AdminGuard = () => {
    const rol = useAppSelector((state: any) => state.credenciales);
    return (rol.descripcion === "Administrador") ? <Outlet /> : prohibido;
}

export const ConsultorGuard = () => {
    const rol = useAppSelector((state: any) => state.credenciales);
    return (rol.descripcion === "Persona" || rol === "Consultor") ? <Outlet /> : prohibido;
}