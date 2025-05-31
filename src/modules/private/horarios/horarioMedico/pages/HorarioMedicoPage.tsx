import Contenido from "../../../../../components/helpers/Contenido"
import MenuSencillo from "../../../../../components/menu/MenuSencillo"
import { PINK_HORARIO } from "../../../../../utils/models/colorModels/colors.model"

function HorarioMedicoPage() {
    return (
        <>
            <MenuSencillo
                color={PINK_HORARIO}
                busqueda={""}
                handleBusqueda={() => { }}
                toggleModal={() => { }}
                buscar={true}
                crear={true}
            />
            <Contenido>
                <h1 className="text-2xl font-bold text-center mb-4">
                    Horario Médico
                </h1>
            </Contenido>
        </>
    )
}

export default HorarioMedicoPage
