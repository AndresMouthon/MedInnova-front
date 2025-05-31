import MenuSencillo from "../../../../components/menu/MenuSencillo"
import { GREEN_PACIENTE } from "../../../../utils/models/colorModels/colors.model"

function PacientePage() {
    return (
        <>
            <MenuSencillo
                color={GREEN_PACIENTE}
                busqueda={""}
                handleBusqueda={() => { }}
                toggleModal={() => { }}
                buscar={true}
                crear={true}
            />
        </>
    )
}

export default PacientePage
