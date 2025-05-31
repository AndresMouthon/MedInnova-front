interface TitleBienvenidaProps {
    descripcionRol: string;
    idRol: number;
    nombreUsuario: string;
    apellidoUsuario: string;
}
function TitleBienvenida({
    descripcionRol,
    idRol,
    nombreUsuario,
    apellidoUsuario
}: TitleBienvenidaProps) {
    const welcomeUser = idRol === 1 ? "Admin. " + nombreUsuario + " " + apellidoUsuario : "Dr. Sánchez";
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard {descripcionRol}</h1>
            <p className="text-gray-600">Bienvenido de vuelta, {welcomeUser}</p>
        </div>
    )
}

export default TitleBienvenida
