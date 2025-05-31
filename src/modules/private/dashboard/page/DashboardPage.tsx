import TitleBienvenida from "../../../../components/layout/components/title/TitleBienvenida"
import { useAppSelector } from "../../../../utils/hooks/useStore";

function DashboardPage() {
    const credenciales = useAppSelector((state: any) => state.credenciales);
    const user = useAppSelector((state: any) => state.user);
    return (
        <>
            <TitleBienvenida 
                descripcionRol={credenciales.descripcion}
                idRol={credenciales.id}
                nombreUsuario={user.nombres}
                apellidoUsuario={user.apellidos}
            />
        </>
    )
}

export default DashboardPage
