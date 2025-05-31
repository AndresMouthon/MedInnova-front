import { ChangeEvent, useState } from "react";
import { alertError, alertSucces, alertWarning } from "../../../../utils/alerts/alertas.utility";
import useModal from "../../../../utils/hooks/useModal";
import apiQueryMedico from "../apis/apiQueryMedico";
import { IMedicoModelDB } from "../models/IMedicoModelDB";

function useMedico() {

    const { openModal, toggleModal } = useModal();
    const [medico, setMedico] = useState<IMedicoModelDB>({
        usuario_id: {
            documento: "",
            nombres: "",
            apellidos: "",
            rol: "Medico",
            genero: "",
        },
        telefono: "",
        especialidad: "",
        numero_colegiatura: "",
        horario_atencion: "",
    });
    const {
        isCreating,
        isLoading,
        medicos,
        createMedicoMutation,
        actualizarMedicoMutation,
    } = apiQueryMedico();

    /*=========== HandleChange ==============================*/
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMedico((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    /*=========== Reset ==============================*/
    const resetMedico = () => {
        setMedico({
            usuario_id: {
                documento: "",
                nombres: "",
                apellidos: "",
                rol: "Medico",
                genero: "",
            },
            telefono: "",
            especialidad: "",
            numero_colegiatura: "",
            horario_atencion: "",
        });
    };
    /*=========== Abrir Modal ==============================*/
    const abrirModal = () => {
        toggleModal();
        resetMedico();
    };
    /*=========== Crear ==============================*/
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        createMedicoMutation(medico, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err: any) => { alertWarning(err); })
                }
            },
            onError: (error: any) => { alertError(error.message); }
        });
    };
    /*=========== Actualizar ==============================*/
    const capturarInformacionMedico = (medico: IMedicoModelDB) => {
        toggleModal();
        setMedico(medico);
    };
    const handleUpdate = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        actualizarMedicoMutation(medico, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err: any) => { alertWarning(err); })
                }
            },
            onError: (error: any) => { alertError(error.message); }
        });
    };
    
    return {
        medico,
        openModal,
        isLoading,
        loading: isCreating,
        medicos,
        toggleModal: abrirModal,
        handleChange,
        handleSubmit,
        capturarInformacionMedico,
        handleUpdate,
    };
}

export default useMedico
