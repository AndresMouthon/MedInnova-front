import MenuSencillo from "../../../../components/menu/MenuSencillo"
import { RED_RECEPCIONISTA } from "../../../../utils/models/colorModels/colors.model"

function RecepcionistaPage() {
    return (
        <>
            <MenuSencillo
                color={RED_RECEPCIONISTA}
                busqueda={""}
                handleBusqueda={() => { }}
                toggleModal={() => { }}
                buscar={true}
                crear={true}
            />
        </>
    )
}

export default RecepcionistaPage