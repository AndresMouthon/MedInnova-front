import Contenido from "../../../../components/helpers/Contenido"
import MenuSencillo from "../../../../components/menu/MenuSencillo"
import { PURPLE_CONSULTORIO } from "../../../../utils/models/colorModels/colors.model"
import CardConsultorioComponent from "../components/CardConsultorioComponent"

function ConsultorioPage() {
    return (
        <>
            <MenuSencillo
                color={PURPLE_CONSULTORIO}
                busqueda={""}
                handleBusqueda={() => { }}
                toggleModal={() => { }}
                buscar={true}
                crear={true}
            />
            <Contenido>
                <CardConsultorioComponent />
            </Contenido>
        </>
    )
}

export default ConsultorioPage
