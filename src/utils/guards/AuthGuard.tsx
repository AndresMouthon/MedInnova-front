import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { PublicRoutes } from "../models/RoutesModel";

export const AuthGuard = () => {
    const usuario = useAppSelector((state: any) => state.user);
    return usuario.nombres ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}

export default AuthGuard;