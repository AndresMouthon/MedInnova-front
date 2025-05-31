import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maqueta from '../components/layout/page/Maqueta';
import ConsultorioPage from '../modules/private/consultorio/pages/ConsultorioPage';
import DashboardPage from '../modules/private/dashboard/page/DashboardPage';
import HorarioMedicoPage from '../modules/private/horarios/horarioMedico/pages/HorarioMedicoPage';
import MedicoPage from '../modules/private/medico/pages/MedicoPage';
import PacientePage from '../modules/private/paciente/pages/PacientePage';
import RecepcionistaPage from '../modules/private/recepcionista/pages/RecepcionistaPage';
import LoginPage from '../modules/public/login/pages/LoginPage';
import AuthGuard from '../utils/guards/AuthGuard';
import { AdminGuard } from '../utils/guards/RolGuard';
import { VerifyGuard } from '../utils/guards/VerifyGuard';
import { PrivateRoutes, PrivateRoutesAdmin, PublicRoutes } from '../utils/models/RoutesModel';

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<VerifyGuard />}>
                    <Route element={<LoginPage />} path={PublicRoutes.LOGIN} />
                </Route>
                <Route element={<AuthGuard />}>
                    <Route element={<Maqueta />}>
                        <Route element={<DashboardPage />} path={PrivateRoutes.DASHBOARD} />
                        <Route element={<AdminGuard />}>
                            <Route element={<MedicoPage />} path={PrivateRoutesAdmin.MEDICO} />
                            <Route element={<PacientePage />} path={PrivateRoutesAdmin.PACIENTE} />
                            <Route element={<RecepcionistaPage />} path={PrivateRoutesAdmin.RECEPCIONISTA} />
                            <Route element={<ConsultorioPage />} path={PrivateRoutesAdmin.CONSULTORIO} />
                            <Route element={<HorarioMedicoPage />} path={PrivateRoutesAdmin.HORARIO} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Rutas
