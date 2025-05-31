import { initFlowbite } from "flowbite";
import { memo, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import useLogin from '../../../modules/public/login/hook/useLogin';
import { useAppSelector } from "../../../utils/hooks/useStore";
import Sidebar from "../components/aside/Sidebar";
import ContainerContenido from "../components/content/ContainerContenido";

const Maqueta = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logout } = useLogin();
    useEffect(() => { initFlowbite(); }, []);
    const credenciales = useAppSelector((state: any) => state.credenciales);

    return (
        <div className="h-screen flex bg-gray-50">
            <Sidebar
                isMenuOpen={isMenuOpen}
                rol={credenciales.id}
                logout={logout}
                setIsMenuOpen={setIsMenuOpen}
            />
            <div className={`flex-1 p-7 transition-all duration-300 ${isMenuOpen ? 'ml-64 hidden sm:block' : 'ml-20'}`}>
                <ContainerContenido>
                    <Outlet />
                </ContainerContenido>
            </div>
        </div>

    );
};

export default memo(Maqueta);