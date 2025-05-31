import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from "../../utils/hooks/useStore";
import { PrivateRoutes } from '../../utils/models/RoutesModel';

export const VerifyGuard = () => {
    const usuario = useAppSelector((state: any) => state.user);
    return usuario.nombres ? <Navigate replace to={PrivateRoutes.DASHBOARD} /> : <Outlet />;
};
