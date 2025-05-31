import DataTablePrimary from "../../../../components/dataTable/DataTablePrimary";
import Contenido from "../../../../components/helpers/Contenido";
import MenuSencillo from "../../../../components/menu/MenuSencillo";
import VentanaModal from "../../../../components/modals/VentanaModal";
import LoadingLayout from "../../../../utils/loadings/LoadingLayout";
import { ORANGE_MEDICO } from "../../../../utils/models/colorModels/colors.model";
import FormComponent from "../components/FormComponent";
import MedicoColumns from "../components/MedicosColumn";
import useMedico from "../hook/useMedico";

function MedicoPage() {
    const {
        medico,
        openModal,
        isLoading,
        loading,
        medicos,
        toggleModal,
        handleChange,
        handleSubmit,
        capturarInformacionMedico,
    } = useMedico();

    const columns = MedicoColumns({
        capturarInformacionMedico,
        deleteMedico: toggleModal,
    });
    
    return (
        loading ? <LoadingLayout /> :
            <>
                <MenuSencillo
                    color={ORANGE_MEDICO}
                    busqueda={""}
                    handleBusqueda={() => { }}
                    toggleModal={toggleModal}
                    buscar={true}
                    crear={true}
                />
                <VentanaModal
                    size={"7xl"}
                    titulo={"Crear Medico"}
                    cerrarModal={toggleModal}
                    hanleSubmit={handleSubmit}
                    openModal={openModal}
                    loading={loading}
                    children={<FormComponent
                        medico={medico}
                        handleChange={handleChange}
                    />}
                />
                <Contenido>
                    <DataTablePrimary
                        data={medicos}
                        columns={columns}
                        loading={isLoading}
                    />
                </Contenido>
            </>
    )
}

export default MedicoPage
